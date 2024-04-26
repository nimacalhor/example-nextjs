import Toolbar from "@global/components/Toolbar";
import PerPageInput from "@global/components/PerPageInput";
import SortBySelect from "@global/components/SortBySelect";
import RefreshButton from "@global/components/RefreshButton";
import AdvancedSearch from "@/modules/advanced-search/components/AdvancedSearchButton/AdvancedSearchButton";

type layoutProps = { children: React.ReactNode };

function layout({ children }: layoutProps) {
  return (
    <>
      <Toolbar>
        <PerPageInput basePath="comments" />
        <RefreshButton />
        <AdvancedSearch />
        <SortBySelect />
      </Toolbar>
      {children}
    </>
  );
}

export default layout;