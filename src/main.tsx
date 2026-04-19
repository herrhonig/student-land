import ReactDOM from "react-dom/client";
import App from "./app/app";
import { MantineProvider } from "@mantine/core";
import { ErrorBoundary, QueryProvider } from "./app/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <QueryProvider>
      <MantineProvider defaultColorScheme="dark">
        <App />
      </MantineProvider>
    </QueryProvider>
  </ErrorBoundary>,
);
