import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AppRouterProvider, QueryProvider } from "./providers";

export const App = () => {
  return (
    <QueryProvider>
      <AppRouterProvider />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  );
};
