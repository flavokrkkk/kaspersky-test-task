import { INewsSlice } from "../types/types";
import { IData_SnippetNews } from "../../types";
import { getAllSnippetNews } from "../../libs/newsService";
import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

export const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState: INewsSlice = {
  isLoading: false,
  snippetNews: [],
  error: "",
};

export const newsSlice = createSliceWithThunks({
  name: "snippet-news-slice",
  initialState,
  selectors: {
    isLoading: (state) => state.isLoading,
    snippetNews: (state) => state.snippetNews,
    error: (state) => state.error,
  },
  reducers: (create) => ({
    getAsyncSnippetNews: create.asyncThunk<
      Array<IData_SnippetNews>,
      void,
      { rejectValue: string }
    >(
      async (_, { rejectWithValue }) => {
        try {
          const response = await getAllSnippetNews();

          return response;
        } catch (e) {
          return rejectWithValue(String(e));
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }) => {
          state.snippetNews = payload;
          state.isLoading = false;
        },
        rejected: (state, { payload }) => {
          state.error = payload ?? "Не удалось получить ответ от сервера!";
        },
      }
    ),
  }),
});

export const newsActions = newsSlice.actions;
export const newsSelectors = newsSlice.selectors;
