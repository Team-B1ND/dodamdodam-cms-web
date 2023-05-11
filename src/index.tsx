import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import ThemeProvider from "./components/common/ThemeProvider";
import PageTemplate from "./components/common/PageTemplate";
import { BrowserRouter } from "react-router-dom";
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <B1ndToastContainer autoClose={5000} limit={6} />
        <BrowserRouter>
          <ThemeProvider>
            <PageTemplate>
              <App />
            </PageTemplate>
          </ThemeProvider>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
