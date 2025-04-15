import { useActions } from "@/shared";
import { useEffect } from "react";

export const useFetchSnippetNews = () => {
  const { getAsyncSnippetNews } = useActions();

  useEffect(() => {
    getAsyncSnippetNews();
  }, []);
};
