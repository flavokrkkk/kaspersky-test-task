import { SnippetHiglihtsControl } from "./snippetHiglihtsControl";
import { NewsHeader } from "./snippetNewsHeader";
import { SourceInfo } from "./snippetSourceInfo";
import SnippetTags from "./snippetTags";
import { Button, Card, Typography } from "antd";
import { IData_SnippetNews } from "@/entities";
import { FC, memo } from "react";
import SnippetNewsFooter from "./snippetNewsFooter";

const { Link } = Typography;

interface ISnippetNewsContent {
  snippetNews: Array<IData_SnippetNews>;
}

const SnippetNewsContent: FC<ISnippetNewsContent> = memo(({ snippetNews }) => (
  <div className="news-container">
    {snippetNews.map((news) => (
      <Card key={news.ID} className="news-card">
        <NewsHeader
          date={news.DP}
          reach={news.REACH}
          sentiment={news.SENT}
          traffic={news.TRAFFIC}
        />
        <div className="news-title">
          <Link
            style={{
              fontSize: "18px",
            }}
            href={news.URL}
            target="_blank"
            className="duplicate-title-link"
          >
            {news.TI}
          </Link>
        </div>
        <SourceInfo
          domain={news.DOM}
          authors={news.AU}
          country={news.CNTR}
          language={news.LANG}
          countryCode={news.CNTR_CODE}
        />
        <SnippetHiglihtsControl higlights={news.HIGHLIGHTS} />
        <SnippetTags snippetTags={news.KW} />
        <Button className="original-source-button">Original Source</Button>
        <SnippetNewsFooter news={news} />
      </Card>
    ))}
  </div>
));

export default SnippetNewsContent;
