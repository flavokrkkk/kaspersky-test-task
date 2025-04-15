import { RootState } from "@/shared/store";
import { createSelector } from "@reduxjs/toolkit";

const selectNewsState = (state: RootState) => state["snippet-news-slice"];

export const newsSliceSelectorsCache = {
  snippetNews: createSelector([selectNewsState], (state) => state.snippetNews),
  isLoading: createSelector([selectNewsState], (state) => state.isLoading),
  error: createSelector([selectNewsState], (state) => state.error),
};
