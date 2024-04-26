import SettingNavLink from "@/modules/setting/components/SettingNavLink";
import dynamic from "next/dynamic";
import NavContextMenu from "../NavContextMenu";

const ModeToggler = dynamic(() => import("../ModeToggler"));

type PageOutlineProps = {
  children: React.ReactNode;
  mainClass?: string;
  outlineClass?: string;
};

function PageOutline({
  children,
  mainClass = "",
  outlineClass = "",
}: PageOutlineProps) {
  return (
    <NavContextMenu>
      <div className={`p-1 md:p-5 h-fit min-h-screen relative ${mainClass}`}>
        <main
          className={`relative h-full p-2 sm:p-3 md:p-5 border-2 rounded-2xl dark:border-[#004080] border-themeBlue min-h-[calc(100vh-2.5rem)] ${outlineClass}`}
        >
          <ModeToggler className="absolute top-2 right-2" />
          <SettingNavLink className="absolute top-2 right-24" />
          {children}
        </main>
      </div>
    </NavContextMenu>
  );
}

export default PageOutline;
