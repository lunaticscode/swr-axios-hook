import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../components/Error";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
