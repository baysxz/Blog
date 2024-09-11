import { DataContextProvider } from "@/Components/DataContext";
import Layout from "@/Components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataContextProvider>
  );
}
