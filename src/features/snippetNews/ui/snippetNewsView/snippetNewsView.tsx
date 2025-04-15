import { newsSliceSelectorsCache } from "@/entities/news/model/selectors/selectors";
import { useAppSelector } from "@/shared";
import { Card, Tag, Spin, Alert, Space, Typography, Button } from "antd";
import "./styles.scss";
import {
  BookOutlined,
  DownOutlined,
  GlobalOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { formatNewsDate } from "@/shared/libs/utils/dateUtils";
import { SnippetHiglihtsControl } from "../snippetHiglihtsControl/snippetHiglihtsControl";

const { Text, Link } = Typography;

export const SnippetNewsView = () => {
  const snippetNews = useAppSelector(newsSliceSelectorsCache.snippetNews);
  const isLoading = useAppSelector(newsSliceSelectorsCache.isLoading);
  const error = useAppSelector(newsSliceSelectorsCache.error);

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        message="Error"
        description="Failed to load news snippets. Please try again later."
        type="error"
        showIcon
        className="alert-margin"
      />
    );
  }

  if (!snippetNews || snippetNews.length === 0) {
    return (
      <Alert
        message="No Data"
        description="No news snippets available."
        type="info"
        showIcon
        className="alert-margin"
      />
    );
  }

  return (
    <div className="news-container">
      {snippetNews.map((news) => (
        <Card key={news.ID} className="news-card">
          <div className="news-header">
            <div className="news-info">
              <Text type="secondary" className="secondary-text">
                {formatNewsDate(news.DP)}
              </Text>
              <Text className="secondary-text">{`${news.REACH}k Reach`}</Text>
              <Text className="secondary-text">
                Top Traffic:{" "}
                {news.TRAFFIC.map((t) => `${t.value} ${t.count}%`).join(" ")}
              </Text>
            </div>
            <Tag color="lime-inverse" className="sentiment-tag">
              Positive
            </Tag>
          </div>

          <div className="news-title">
            <Link href={news.URL} target="_blank" className="title-link">
              {news.TI}
            </Link>
          </div>

          <div className="source-info">
            <Space size={12} align="center">
              <Space size={4} align="center">
                <GlobalOutlined />
                <Link href={news.DOM} target="_blank" className="source-link">
                  {news.DOM.replace(/^https?:\/\/(www\.)?/, "")}
                </Link>
              </Space>

              <Space size={4} align="center">
                <img
                  src={`https://flagcdn.com/16x12/${news.CNTR_CODE.toLowerCase()}.png`}
                  alt={news.CNTR}
                  className="flag"
                />
                <Text type="secondary" className="country-text">
                  {news.CNTR}
                </Text>
              </Space>

              <Space size={4} align="center">
                <BookOutlined />
                <Text type="secondary" className="language-text">
                  {news.LANG.toUpperCase()}
                </Text>
              </Space>

              <Space size={4} align="center">
                <UserOutlined />
                <Text type="secondary" className="author-text">
                  {news.AU.length > 0 ? news.AU.join(", ") : "Unknown Author"}
                </Text>
              </Space>
            </Space>
          </div>
          <SnippetHiglihtsControl higlights={news.HIGHLIGHTS} />
          <div className="news-tags">
            {news.KW.map((keyword) => (
              <Tag key={keyword.value} className="tag">
                {keyword.value} {keyword.count}
              </Tag>
            ))}
            <Link className="show-all-link">SHOW ALL +{news.KW.length}</Link>
          </div>

          <div className="news-footer">
            <div className="original-source">
              <Text type="secondary" className="duplicates-text">
                DUPLICATES: {news.ID}
              </Text>{" "}
              <a className="sort-link">
                By Relevance <DownOutlined className="sort-icon" />
              </a>
            </div>
            <div className="duplicate-card">
              <div className="duplicate-header">
                <Space size={12} align="center">
                  <Text type="secondary" className="duplicate-secondary-text">
                    {formatNewsDate(news.DP)}
                  </Text>
                  <Text type="secondary" className="duplicate-secondary-text">
                    {news.REACH.toLocaleString()}k Top Reach
                  </Text>
                </Space>
              </div>

              <div className="duplicate-title">
                <Link
                  href={news.URL}
                  target="_blank"
                  className="duplicate-title-link"
                >
                  {news.TI}
                </Link>
              </div>

              <div className="duplicate-source-info">
                <Space size={12} align="center">
                  <Space size={4} align="center">
                    <GlobalOutlined />
                    <Link
                      href={news.DOM}
                      target="_blank"
                      className="duplicate-source-link"
                    >
                      {news.DOM.replace(/^https?:\/\/(www\.)?/, "")}
                    </Link>
                  </Space>

                  <Space size={4} align="center">
                    <img
                      src={`https://flagcdn.com/16x12/${news.CNTR_CODE.toLowerCase()}.png`}
                      alt={news.CNTR}
                      className="duplicate-flag"
                    />
                    <Text type="secondary" className="duplicate-country-text">
                      {news.CNTR}
                    </Text>
                  </Space>

                  <Space size={4} align="center">
                    <BookOutlined />
                    <Text type="secondary" className="duplicate-language-text">
                      {news.LANG.toUpperCase()}
                    </Text>
                  </Space>

                  <Space size={4} align="center">
                    <UserOutlined />
                    <Text type="secondary" className="duplicate-author-text">
                      {news.AU.length > 0
                        ? news.AU.join(", ")
                        : "Unknown Author"}
                    </Text>
                  </Space>
                </Space>
              </div>
            </div>
            <Button
              className="view-duplicates-button"
              type="link"
              block
              size="large"
            >
              View Duplicates <DownOutlined className="view-duplicates-icon" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
