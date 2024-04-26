"use client";
import { Dialog, DialogContent, DialogTrigger } from "@ui/dialog";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { actions } from "../../store";
import Loadingaccountdetailsdialog from "../AccountForm/Loadingaccountdetailsdialog";

const AccountForm = dynamic(() => import("../AccountForm"), { loading:()=> <Loadingaccountdetailsdialog/> ,ssr: false });

type AccountDetailsDialogProps = {
  children: React.ReactNode;
  newAccount?: boolean;
};

function AccountDetailsDialog({
  children,
  newAccount = false,
}: AccountDetailsDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Dialog open={isOpen} onOpenChange={openChangeHandler}>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent dir="rtl" className="lg:max-w-screen-sm text-right">
          {isOpen && <AccountForm closeDialog={() => openChangeHandler(false)} />}
        </DialogContent>
      </Dialog>
    </>
  );

  function openChangeHandler(open: boolean) {
     
    setIsOpen(open);
     
    if (newAccount) dispatch(actions.switchMode({ mode: true, account: null }));
     
    if (!open) dispatch(actions.setAccount({ account: null }));
  }
}

export default AccountDetailsDialog;
