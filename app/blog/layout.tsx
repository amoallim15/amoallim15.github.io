import { Navbar } from "../components/nav";
// import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../components/footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-4 lg:mx-auto max-w-xl flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <Navbar />
      {children}
      <Footer />
      {/* <Analytics /> */}
      <SpeedInsights />
    </main>
  );
}
