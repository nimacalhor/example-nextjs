 
import Toolbar from "@global/components/Toolbar";
import AddButton from "@global/components/AddButton";
import PerPageInput from "@global/components/PerPageInput";
import SortBySelect from "@global/components/SortBySelect";
import RefreshButton from "@global/components/RefreshButton";
import dynamic from "next/dynamic";
import AccountDetailsDialog from "@account/components/AccountDetailsDialog";

type layoutProps = { children: React.ReactNode };

function layout({ children }: layoutProps) {
  return (
    <>
      <Toolbar>
        <PerPageInput basePath="accounts" />
        <RefreshButton />
        <AccountDetailsDialog newAccount>
          <AddButton moduleName="اکانت" />
        </AccountDetailsDialog>
        <SortBySelect />
      </Toolbar>
      {children}
    </>
  );
}

export default layout;
