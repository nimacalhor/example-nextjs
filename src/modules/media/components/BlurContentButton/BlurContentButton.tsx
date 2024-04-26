"use client";
 
import { Checkbox } from "@ui/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { CheckedState } from "@radix-ui/react-checkbox";
import { actions } from "../../store";
import { RootState } from "@global/store";
import { cn } from "@global/utils/chadcn-utils";

type BlurContentButtonProps = { className?: string; labelClassName?: string };

function BlurContentButton({
  className,
  labelClassName,
}: BlurContentButtonProps) {
  const dispatch = useDispatch();
  const { nsfw } = useSelector((state: RootState) => state.media);

  return (
    <>
      <div className={cn("flex items-center gap-1", className)}>
        <Checkbox
          checked={nsfw}
          id="blurContentButton"
          onCheckedChange={switchNsfw}
        />
        <label
          htmlFor="blurContentButton"
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none",
            labelClassName
          )}
        >
          محتوای نامناسب
        </label>
      </div>
    </>
  );

  function switchNsfw(state: CheckedState) {
    dispatch(actions.switchNsfw({ nsfw: !!state }));
  }
}

export default BlurContentButton;
