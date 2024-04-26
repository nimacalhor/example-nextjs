"use client";
import { Button } from "@ui/button";
import {
  faDownload,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RootState } from "@/global/store";
import { useDispatch, useSelector } from "react-redux";
import { AdvancedSearchState } from "../types/search-item-types";
import { useToast } from "@/global/ui/use-toast";
import { searchItemsToParams } from "../util/search-item-helper";
import { useRouter, usePathname } from "next/navigation";
import { isArrayValid } from "@/global/utils/array-utils";
import { DialogClose } from "@ui/dialog";
import { actions } from "../store";

type SearchActionsProps = {};

function SearchActions({}: SearchActionsProps) {
  const { items, condition } = useSelector(
    (state: RootState) => state.advancedSearch
  );
  const { toast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex gap-2 mt-3">
        <Button
          onClick={exportJsonHandler}
          className="flex gap-1"
          variant={"secondary"}
        >
          <span>خروجی</span>
          <FontAwesomeIcon icon={faDownload} />
        </Button>
        <Button onClick={searchClickHandler} className="flex gap-1">
          <span>جستجو</span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </div>
    </>
  );

  function searchClickHandler() {
    const isValid = isSearchItemsValid(items);
    if (!isValid)
      return toast({
        variant: "destructive",
        title: "لطفا همه ورودی هارا انتخاب نمایید",
      });
    const params = searchItemsToParams({ items, condition });
    dispatch(actions.setDialog({ isOpen: false }));
    dispatch(actions.removeItems());
    router.push(`${pathname}?query=${params}`);
  }

  function exportJsonHandler() {
    const isValid = isSearchItemsValid(items);
    if (!isValid)
      return toast({
        variant: "destructive",
        title: "لطفا همه ورودی هارا انتخاب نمایید",
      });

    const blob = new Blob([JSON.stringify({ condition, items }, null, 2)], {
      type: "application/json",
    });

    const downloadLink = document.createElement("a");
    const url = URL.createObjectURL(blob);

    downloadLink.href = url;
    downloadLink.download = "advancedSearchExport.json";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);

    // Release the URL object
    URL.revokeObjectURL(url);
  }
}

export default SearchActions;

function isSearchItemsValid(myArray: AdvancedSearchState["items"]): boolean {
  if (!isArrayValid(myArray, true)) return false;
  return myArray.every(
    (item) => item.queryKey && item.queryValue && item.queryType
  );
}
