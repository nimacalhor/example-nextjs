import { cn } from "@global/utils/chadcn-utils";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type SpinnerProps = { className?: string };

function Spinner({ className }: SpinnerProps) {
  return (
    <>
      <FontAwesomeIcon
        className={cn("animate-spin w-4 h-4", className)}
        icon={faSpinner}
      />
    </>
  );
}

export default Spinner;
