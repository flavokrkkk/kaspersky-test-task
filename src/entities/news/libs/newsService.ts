import axios from "axios";
import { IData_SnippetNews } from "../types";
import { IAxiosResponse } from "@/shared";

class NewsService {
  private static instance: NewsService;

  public constructor() {}

  public static getInstance() {
    if (!NewsService.instance) {
      NewsService.instance = new NewsService();
    }

    return NewsService.instance;
  }

  public async getAllSnippetNews(): Promise<Array<IData_SnippetNews>> {
    try {
      const {
        data: { data },
      } = await axios.get<IAxiosResponse<IData_SnippetNews>>(
        "/mocks/news.json"
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Ошибка Axios:", error.response?.status, error.message);
        throw new Error(
          `Ошибка загрузки новостей: ${
            error.response?.data?.message || error.message
          }`
        );
      }
      throw new Error("Неизвестная ошибка при загрузке новостей");
    }
  }
}

export const { getAllSnippetNews } = NewsService.getInstance();
