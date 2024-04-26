"use client";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@global/utils/chadcn-utils";
import { isArrayValid } from "@global/utils/array-utils";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type UploadSearchButtonProps = { className?: string };

function UploadSearchButton({ className }: UploadSearchButtonProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log({ acceptedFiles });

    if (!isArrayValid(acceptedFiles)) return;

    // dispatch(actions.addFiles({ files: acceptedFiles }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/json/*": [".json"] },
  });

  return (
    <>
      <div
        {...getRootProps()}
        className={cn(
          "group p-2 bg-gradient-to-r from-secondary via-border/50 hover:shadow-md to-primary/5 dark:from-card/80 dark:hover:border-2 dark:border-transparent dark:hover:border-primary/80 dark:via-card dark:to-primary/20 flex justify-center items-center transition-all duration-200 ease-in hover:cursor-pointer rounded-lg text-foreground/70 h-full",
          className
        )}
      >
        <h3 className="select-none">آپلود فایل جستجو</h3>
        <FontAwesomeIcon className="mr-2" icon={faArrowUpFromBracket} />
        <input {...getInputProps()} />
      </div>
    </>
  );
}

export default UploadSearchButton;
