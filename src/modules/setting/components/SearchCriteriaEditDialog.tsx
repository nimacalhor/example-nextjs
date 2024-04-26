import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/dialog";
import SearchCriteriaEditForm from "./SearchCriteriaEditForm";

type SearchCriteriaEditDialogProps = { children: React.ReactNode };

function SearchCriteriaEditDialog({ children }: SearchCriteriaEditDialogProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>edit search criteria item</DialogTitle>
            <DialogDescription>
              انتخاب اینکه چگونه کاربر بر اساس فیلد جستجو بسازد
            </DialogDescription>
          </DialogHeader>
          <SearchCriteriaEditForm />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default SearchCriteriaEditDialog;
