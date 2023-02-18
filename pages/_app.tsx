import "@/styles/globals.css";
import Hls from "hls.js";
import type { AppProps } from "next/app";
import { useEffect } from "react";
declare global {
  interface Window {
    hls: any;
  }
}
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.hls = {};
  }, []);
  return <Component {...pageProps} />;
}
