"use client";
import Link from "next/link";
import { Card } from "@global/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { PinContainer } from "@/global/ui/threeDPin";

type MainNavButtonProps = {
  text: string;
  Icon: IconDefinition;
  href: string;
  description: string;
};

function MainNavButton({ text, Icon, href, description }: MainNavButtonProps) {
  return (
    <>
      <div className="w-full flex justify-center  items-center sm:w-1/2 p-1 h-44 sm:h-72 md:h-64 md:w-1/3 lg:w-1/4">
        <PinContainer title={description} containerClassName="w-full !bg-transparent h-full ">
          <Link className="" href={href}>
            <Card className="h-60 xl:h-60 w-60 xl:w-72 rounded-3xl border-none hover:cursor-pointer hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/20 active:shadow-none bg-gradient-to-tl from-primary/20 via-[#f0fffc] to-card dark:via-primary/10 hover group">
              <div className="border-2 group-hover:bg-transparent hover:border-primary bg-card rounded-3xl flex flex-col items-center h-full transition-all duration-200 ease-in justify-evenly active:border-4">
                <div>
                  <FontAwesomeIcon icon={Icon} className="h-12 w-12" />
                </div>
                <h2 className="text-xl font-semibold select-none">{text}</h2>
              </div>
            </Card>
          </Link>
        </PinContainer>
      </div>
    </>

    // <div className="w-full flex justify-center items-center sm:w-1/2 p-1 h-44 sm:h-72 md:h-64 md:w-1/3 lg:w-1/4">
    //   <PinContainer
    //     title="/ui.aceternity.com"
    //     href="https://twitter.com/mannupaaji"
    //   >
    //     <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-44 h-44 ">
    //       <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
    //         Aceternity UI
    //       </h3>
    //       <div className="text-base !m-0 !p-0 font-normal">
    //         <span className="text-slate-500 ">
    //           Customizable Tailwind CSS and Framer Motion Components.
    //         </span>
    //       </div>
    //       <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
    //     </div>
    //   </PinContainer>
    // </div>
  );
}

export default MainNavButton;
