import NAV_ITEMS from "@global/constants/main-page-nav-items";
import Title from "@global/components/Title";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const MainNavButton = dynamic(
  () => import("@global/components/MainNavButton"),
  {}
);

export const metadata: Metadata = {
  title: " ",
};

export default function HomePage() {
  return (
    <>
      <div className="grid h-full max-w-screen-xl grid-rows-3 mx-auto gap-y-3 gap-x-5">
        <Title
          engClass="text-4xl sm:text-5xl lg:text-6xl"
          faClass="text-lg sm:text-2xl lg:text-3xl"
        />
        <div className="flex flex-row flex-wrap row-span-3">
          {NAV_ITEMS.map(({ icon, text, href, description }, i) => (
            <MainNavButton
              Icon={icon}
              text={text}
              href={href}
              key={i}
              description={description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
