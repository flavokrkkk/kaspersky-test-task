import { Button, Typography } from "antd";
import { DuplicateCard } from "./snippetDublicateCard";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { FC, useState } from "react";
import { IData_SnippetNews } from "@/entities";

const { Text } = Typography;

interface ISnippetNewsFooter {
  news: IData_SnippetNews;
}

const SnippetNewsFooter: FC<ISnippetNewsFooter> = ({ news }) => {
  const [isShowDublicate, setIsShowDublicate] = useState(false);

  const handleShowDublicate = () => setIsShowDublicate((prev) => !prev);

  return (
    <div className="news-footer">
      <div className="original-source">
        <Text type="secondary" className="duplicates-text">
          Duplicates: {news.ID}
        </Text>
        <p>
          By Relevance <DownOutlined className="sort-icon" />
        </p>
      </div>
      {isShowDublicate && (
        <DuplicateCard
          url={news.URL}
          date={news.DP}
          title={news.TI}
          domain={news.DOM}
          authors={news.AU}
          reach={news.REACH}
          country={news.CNTR}
          countryCode={news.CNTR_CODE}
        />
      )}

      <Button
        block
        type="link"
        size="large"
        className="view-duplicates-button"
        onClick={handleShowDublicate}
      >
        View Duplicates
        {isShowDublicate ? (
          <UpOutlined className="view-duplicates-icon" />
        ) : (
          <DownOutlined className="view-duplicates-icon" />
        )}
      </Button>
    </div>
  );
};

export default SnippetNewsFooter;
