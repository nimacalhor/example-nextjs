"use client";
import Spinner from "@/global/components/Spinner";
import { RootState } from "@/global/store";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isArrayValid } from "@global/utils/array-utils";
import { cn } from "@global/utils/chadcn-utils";
import { useToast } from "@ui/use-toast";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store";
import { parseSearchJson } from "../util/validate-search-json";
import { validateSearchItemWithSetting } from "../util/validateSearchItemWithSetting";

type UploadSearchButtonProps = { className?: string };

function UploadSearchButton({ className }: UploadSearchButtonProps) {
  const { toast } = useToast();

  const pending = false;
  const dispatch = useDispatch();
  const { setting } = useSelector((state: RootState) => state.setting);
  const pathname = usePathname();
  const activeQuery =
    pathname === "/media"
      ? setting?.queryKeys.media
      : pathname === "/profiles"
      ? setting?.queryKeys.profile
      : setting?.queryKeys.comment;

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (!isArrayValid(acceptedFiles)) return;

      const formData = new FormData();
      formData.set("file", acceptedFiles[0]);

      const result = await parseSearchJson(formData);
       
      if (typeof result === "string")
        toast({
          title: "فایل معتبر نیست",
          description: result,
          variant: "destructive",
          duration: 10000,
        });
      else {
         
        const isValidddd = validateSearchItemWithSetting(
          result,
          activeQuery as any
        );
        if (isArrayValid(isValidddd, true))
          return toast({
            title: "فایل معتبر نیست",
            description: isValidddd.join(", "),
            variant: "destructive",
            duration: 10000,
          });
        const { condition, items } = result;
        dispatch(actions.setCondition({ condition }));
        dispatch(actions.setItems({ items }));
      }
    },
    [toast, dispatch, activeQuery]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/json/*": [".json"] },
    maxFiles: 1,
    multiple: false,
    // validator(file) {},
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
        {pending && <Spinner />}
        {!pending && <h3>آپلود فایل جستجو</h3>}
        <FontAwesomeIcon className="mr-2" icon={faArrowUpFromBracket} />
        <input {...getInputProps()} />
      </div>
    </>
  );
}

export default UploadSearchButton;
