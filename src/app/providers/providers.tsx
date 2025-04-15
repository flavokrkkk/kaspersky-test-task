import { routes } from "@/pages/routes/routes";
import { store } from "@/shared";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

export const Providers = () => (
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
