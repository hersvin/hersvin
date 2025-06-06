import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider } from "@mantine/core";

import App from "./App.tsx";

import "./index.css";
import "./assets/fonts.css";
import "@mantine/core/styles.css";
import "@mantine/core/styles.layer.css";
import "@mantine/core/styles/global.css";

const theme = createTheme({});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
