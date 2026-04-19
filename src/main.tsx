import ReactDOM from "react-dom/client";
import { App } from "./app/app";
import { ErrorBoundary, QueryProvider } from "./app/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <QueryProvider>
      <App />
    </QueryProvider>
  </ErrorBoundary>,
);
