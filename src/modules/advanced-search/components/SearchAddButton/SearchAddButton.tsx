"use client";
 
import { Button } from "@ui/button";
import { actions } from "../../store";
import { useDispatch } from "react-redux";
import { cn } from "@global/utils/chadcn-utils";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createEmptySearchItem } from "../../util/search-item-helper";

type SearchAddButtonProps = { className?: string };

function SearchAddButton({ className }: SearchAddButtonProps) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={clickHandler}
      className={cn(
        "bg-gradient-to-br group active:p-[3px] transition-all duration-200 ease-in hover:cursor-pointer from-primary via-primary/70 to-primary p-[2px] rounded-lg",
        className
      )}
    >
      <Button
        variant={"outline"}
        size={"lg"}
        className="flex border-none w-full gap-2 justify-center items-center group-active:bg-background text-md py-1"
      >
        <span>افزودن آیتم</span>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );

  function clickHandler() {
    dispatch(actions.addItem({ item: createEmptySearchItem() }));
  }
}

export default SearchAddButton;
