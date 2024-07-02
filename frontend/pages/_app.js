import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopLoadingLine from "@/components/TopLoadingLine";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
    <TopLoadingLine />
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
}
