import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LayoutDefault from "@/components/common/Layout";
import { CardContextProvider } from "@/hooks/useCart";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CardContextProvider>
      <LayoutDefault>
        <Component {...pageProps} />
      </LayoutDefault>
    </CardContextProvider>
  );
}
