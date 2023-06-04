import { B1ndToastContainer } from "@b1nd/b1nd-toastify";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from "../Layout";
import ThemeProvider from "../ThemeProvider";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: Infinity,
            staleTime: 0,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <B1ndToastContainer autoClose={5000} limit={6} />
        <BrowserRouter basename="cms">
          <ThemeProvider>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Provider;
