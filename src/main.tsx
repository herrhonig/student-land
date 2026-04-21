import ReactDOM from "react-dom/client";

import { App } from "./app/app";
import { ErrorBoundary } from "./app/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
