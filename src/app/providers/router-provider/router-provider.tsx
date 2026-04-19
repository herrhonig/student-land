import { RouterProvider } from "react-router";
import { router } from "./router";

type AppRouterProps = {};

export const AppRouterProvider = ({}: AppRouterProps) => {
  return <RouterProvider router={router} />;
};
