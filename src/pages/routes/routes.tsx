import { createBrowserRouter, Navigate } from "react-router-dom";
import RootPage from "../rootPage";
import ErrorPage from "../errorPage";
import { lazy } from "react";
import { ERouteNames } from "@/shared/libs/routeVariables";

const NewsPage = lazy(() => import("@pages/newsPage"));

export const routes = createBrowserRouter([
  {
    path: ERouteNames.DEFAULT_ROUTE,
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Navigate to={ERouteNames.SNIPPET_NEWS_ROUTE} replace />,
      },
      {
        path: ERouteNames.SNIPPET_NEWS_ROUTE,
        element: <NewsPage />,
      },
    ],
  },
]);
