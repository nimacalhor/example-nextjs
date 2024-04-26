"use client";
import { Button } from "@ui/button";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, usePathname } from "next/navigation";

type RefreshButtonProps = {};

function RefreshButton({}: RefreshButtonProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <Button
        className="flex items-center"
        onClick={clickHandler}
        variant={"ghost"}
      >
        <span className="hidden sm:inline-block">بازآوری</span>
        <FontAwesomeIcon className="sm:mr-2 w-4 h-4" icon={faRotate} />
      </Button>
    </>
  );

  function clickHandler() {
    router.replace(`${pathname}`);
  }
}

export default RefreshButton;
