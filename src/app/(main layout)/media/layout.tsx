 
import dynamic from "next/dynamic";
import Toolbar from "@global/components/Toolbar";
import PerPageInput from "@global/components/PerPageInput";
import SortBySelect from "@global/components/SortBySelect";
import RefreshButton from "@global/components/RefreshButton";
import AdvancedSearch from "@/modules/advanced-search/components/AdvancedSearchButton/AdvancedSearchButton";

const BlurContentButton = dynamic(
  () => import("@media/components/BlurContentButton"),
  { ssr: false }
);

type layoutProps = { children: React.ReactNode };

function layout({ children }: layoutProps) {
  return (
    <>
      <Toolbar>
        <PerPageInput basePath="media" />
        <BlurContentButton />
        <RefreshButton />
        <AdvancedSearch />
        <SortBySelect />
      </Toolbar>
      {children}
    </>
  );
}

export default layout;
