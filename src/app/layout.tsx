import "./globals.css";
import "swiper/css";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Toaster } from "@ui/toaster";
import iransans from "@global/fonts/iransans";
import BgShapes from "@global/components/BgShapes";
import AppProviders from "@global/providers/Index";
import PageOutline from "@global/components/PageOutline";
import BookmarkSheetButton from "@bookmark/components/BookmarkSheetButton";
import { BackgroundBeams } from "@ui/bgBeams";


const TopLoader = dynamic(() => import("@global/components/TopLoader"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: {
    template: "  | %s",
    default: " ",
  },
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="en" className="overflow-x-hidden relative">
      <body
        className={`${iransans.className} text-right box-border overflow-x-hidden !mx-0 relative`}
      >
        <BackgroundBeams />
        <AppProviders>
          <TopLoader />
          {/* <BgShapes /> */}
          <PageOutline>
            <BookmarkSheetButton />
            {children}
          </PageOutline>
        </AppProviders>
        <Toaster />
      </body>
    </html>
  );
}
