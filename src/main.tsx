import ReactDOM from "react-dom/client";
import App from "./app/App";
import { Button, MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider defaultColorScheme="dark">
    <App />
  </MantineProvider>,
);
