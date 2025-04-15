import { newsSliceSelectorsCache } from "@/entities/news/model/selectors/selectors";
import { useAppSelector } from "@/shared";
import { Spin, Alert } from "antd";
import "../styles/styles.scss";
import SnippetNewsContent from "./snippetNewsContent";

export const SnippetNewsView = () => {
  const error = useAppSelector(newsSliceSelectorsCache.error);
  const isLoading = useAppSelector(newsSliceSelectorsCache.isLoading);
  const snippetNews = useAppSelector(newsSliceSelectorsCache.snippetNews);

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
    <div className="snippet-news-container">
      <SnippetNewsContent snippetNews={snippetNews} />
    </div>
  );
};
