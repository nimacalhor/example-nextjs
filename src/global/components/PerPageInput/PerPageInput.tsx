"use client";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useRef } from "react";

type PerPageInputProps = {
  label?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  basePath?: string;
};
const defaultLabel = "تعداد در هر صفحه";

function PerPageInput({
  label = defaultLabel,
  max = 30,
  min = 1,
  basePath,
}: PerPageInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <>
      <div className="flex justify-start items-center gap-2">
        <Label htmlFor="perPageInput" className="hidden sm:inline-block">
          {label}
        </Label>

        <Input
          min={min}
          max={max}
          type="number"
          ref={inputRef}
          id="perPageInput"
          className="w-fit"
          onBlur={blurHandler}
          onKeyDown={enterHandler}
        />
      </div>
    </>
  );

  function enterHandler(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    perPageChangeHandler();
  }

  function blurHandler() {
    perPageChangeHandler();
  }

  function perPageChangeHandler() {
    const value = inputRef.current?.value;
    if (!value || Number(value) === 0) return;
    if (basePath) router.push(`/${basePath}?page=1&per_page=${value}`);
  }
}

export default PerPageInput;
