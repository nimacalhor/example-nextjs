"use client";
import { MouseEvent, useState } from "react";
import { Button } from "@ui/button";
import { useToast } from "@ui/use-toast";
import { RootState } from "@global/store";
import { useSelector } from "react-redux";
import Spinner from "@global/components/Spinner";
import { useSearchParams } from "next/navigation";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { D_PER_PAGE } from "@global/constants/api-constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import deleteAccountAction from "../../actions/deleteAccount-action";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@ui/dialog";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

type DeleteAccountButtonProps = { closeDialog: () => void };

function DeleteAccountButton({ closeDialog }: DeleteAccountButtonProps) {
  const [isPending, setIsPending] = useState(false);
  const searchParams = useSearchParams();
  const { account } = useSelector((state: RootState) => state.account);
  const { toast } = useToast();
  const [showModal, setShowModal] = useState(false);
  const cancelDelete = () => {
    setShowModal(false);
  };
  return (
    <>
      <Button
        type="button"
        onClick={() => setShowModal(true)}
        className="flex gap-2"
        variant={"destructive"}
      >
        {!isPending && <span>حذف</span>}
        {isPending && <Spinner />}
        <FontAwesomeIcon icon={faTrash} />
      </Button>
      <Dialog open={showModal} onOpenChange={value => setShowModal(value)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center mt-10">
              <FontAwesomeIcon icon={faTriangleExclamation} className="fa-6x" />
            </DialogTitle>
            <DialogDescription>
              <p className="text-center my-10 text-xl">آیا مطمئن هستید؟</p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-5 w-full !justify-center">
            <Button
              variant={"default"}
              className="  px-5 "
              onClick={deleteClickHandler}
            >
              بله
            </Button>
            <Button
              variant={"secondary"}
              className=" px-5 "
              onClick={cancelDelete}
            >
              خیر
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );

  async function deleteClickHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setShowModal(false);
    if (!account) return;
    const page = searchParams.get("page") || 1;
    const perPage = searchParams.get("per_page") || D_PER_PAGE;

    setIsPending(true);

    const message = await deleteAccountAction(
      account._id,
      Number(page),
      Number(perPage)
    );

    setIsPending(false);

    if (message)
      toast({
        title: "اکانت حذف نشد",
        description: message,
        variant: "destructive",
      });
    else {
      closeDialog();
      toast({
        title: "اکانت با موفقیت حذف شد ✅",
      });
    }
  }
}

export default DeleteAccountButton;
