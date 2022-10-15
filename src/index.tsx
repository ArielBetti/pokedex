import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";

import AppRouter from "./routes";
import { ResetCss } from "./theme/globalStyles";
import { dark } from "./theme";
import { Header } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={dark()}>
        <ResetCss />
        <BrowserRouter>
          <Header />
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
