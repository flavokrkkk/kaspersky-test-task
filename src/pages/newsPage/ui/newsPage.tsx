import { useFetchSnippetNews } from "@/features/snippetNews/hooks/useFetchSnippetNews";
import { SnippetNewsView } from "@/features/snippetNews/ui/snippetNewsView";

const NewsPage = () => {
  useFetchSnippetNews();

  return <SnippetNewsView />;
};

export default NewsPage;
