import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Navbar from "@/components/layout/Navbar";
import SideBar from "@/components/layout/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="flex">
        <aside className="hidden lg:block w-[80px] shadow-md fixed top-[65px] left-0 h-[calc(100vh-65px)] z-40">
          <SideBar />
        </aside>
        <main className="w-full mt-[65px] lg:ml-[80px]">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
