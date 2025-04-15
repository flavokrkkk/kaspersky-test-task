import { newsActions } from "@/entities/news/model/store/newsSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ ...newsActions }, dispatch);
};
