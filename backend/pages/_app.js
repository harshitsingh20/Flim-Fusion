import Aside from "@/components/Aside";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return <>

    <main>
      <SessionProvider session={session}>
        <Aside />
      </SessionProvider>
      <div className="container">
        <SessionProvider session={session}>
          <Header />
        </SessionProvider>
      </div>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>

  </>
}
