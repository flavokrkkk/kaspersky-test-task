import { IData_SnippetNews } from "../../types";

export interface INewsSlice {
  snippetNews: Array<IData_SnippetNews>;
  isLoading: boolean;
  error: string;
}
