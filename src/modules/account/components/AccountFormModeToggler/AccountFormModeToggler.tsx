"use client";
import { Label } from "@ui/label";
import { Button, buttonVariants } from "@ui/button";
import { Checkbox } from "@ui/checkbox";
import { actions } from "@account/store";
import { useDispatch } from "react-redux";
import { cn } from "@global/utils/chadcn-utils";

type AccountFormModeTogglerProps = {};

function AccountFormModeToggler({}: AccountFormModeTogglerProps) {
  const dispatch = useDispatch();
  return (
    <>
      <span
        className={cn(
          "items-top group flex gap-2",
          buttonVariants({ variant: "secondary" })
        )}
      >
        <Checkbox onCheckedChange={changeHandler} id="terms1" />
        <div className="leading-none">
          <Label
            htmlFor="terms1"
            className="text-sm group-hover:cursor-pointer font-medium text-foreground/80 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            حالت ادیت
          </Label>
        </div>
      </span>
    </>
  );

  function changeHandler(checked: boolean) {
    dispatch(actions.switchMode({ mode: checked }));
  }
}

export default AccountFormModeToggler;
