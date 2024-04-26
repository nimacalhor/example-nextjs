"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/dialog";
import dynamic from "next/dynamic";
import SearchAddButton from "../SearchAddButton";
import FormulaPreview from "../FormulaPreview";
import SearchActions from "../SearchActions";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";
import { RootState } from "@/global/store";

const UploadSearchButton = dynamic(() => import("../UploadSearchButton"), {
  ssr: false,
});
const SearchItemList = dynamic(() => import("../SearchItemList"), {
  ssr: false,
});

type AdvancedSearchDialogProps = { children: React.ReactNode };

function AdvancedSearchDialog({ children }: AdvancedSearchDialogProps) {
  const dispatch = useDispatch();
  const { dialog } = useSelector((state: RootState) => state.advancedSearch);

  return (
    <>
      <Dialog open={dialog} onOpenChange={dialogCloseHandler}>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="max-w-screen-lg">
          <DialogHeader>
            <DialogTitle className="font-normal">جستجوی پیشرفته</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="md:grid grid-cols-2 gap-2 justify-stretch items-stretch">
            <SearchAddButton className="col-start-1 col-end-2" />
            <UploadSearchButton className="col-start-2 col-end-3" />
          </div>
          <FormulaPreview />
          <SearchItemList />
          <SearchActions />
        </DialogContent>
      </Dialog>
    </>
  );

  function dialogCloseHandler(open: boolean) {
    dispatch(actions.setDialog({ isOpen: open }));
    if (open) return;
    dispatch(actions.removeItems());
  }
}

export default AdvancedSearchDialog;
