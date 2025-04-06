import ReactDOM from "react-dom/client";
import {
  MantineProvider,
  customTheme,
  createTheme,
  mergeThemeOverrides,
} from "@mononxtest/ui-lib";
import App from "./App";

const ownTheme = createTheme({
  primaryColor: "cyan",
  spacing: {
    xs: "calc(2rem * var(--mantine-scale))",
    sm: "calc(4rem * var(--mantine-scale))",
    md: "calc(6rem * var(--mantine-scale))",
    lg: "calc(8rem * var(--mantine-scale))",
    xl: "calc(10rem * var(--mantine-scale))",
  }
});

const theme = mergeThemeOverrides(customTheme, ownTheme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
