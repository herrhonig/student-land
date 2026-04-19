import ReactDOM from "react-dom/client";
import App from "./app/app";
import { MantineProvider } from "@mantine/core";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <MantineProvider defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </ErrorBoundary>,
);
