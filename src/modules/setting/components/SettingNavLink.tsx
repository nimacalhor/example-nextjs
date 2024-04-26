"use client";
import Spinner from "@/global/components/Spinner";
import { RootState } from "@/global/store";
import { Button, buttonVariants } from "@/global/ui/button";
import { cn } from "@/global/utils/chadcn-utils";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSetting } from "../store/setting-slice";
import { Badge } from "@/global/ui/badge";

type SettingNavLinkProps = { className?: string };

function SettingNavLink({ className }: SettingNavLinkProps) {
  const { error, setting, status } = useSelector(
    (state: RootState) => state.setting
  );

  const dispatch = useDispatch();

  const isPending = status === "loading" || status === "idle";
  const isDisable = isPending || status === "failed";

  useEffect(() => {
    dispatch(fetchSetting() as any);
  }, [dispatch]);

  useEffect(() => {
    console.log({ status, setting });
  }, [status, setting]);

  if (isPending)
    return (
      <>
        <span
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "icon",
              className:
                "rounded-full bg-transparent hover:cursor-default hover:bg-transparent",
            }),
            className
          )}
        >
          <Spinner />
        </span>
      </>
    );

  return (
    <>
      <Link passHref href={"/settings"}>
        <Button
          size={"icon"}
          variant={"outline"}
          disabled={isDisable}
          className={cn("rounded-full bg-transparent", className)}
          >
          <FontAwesomeIcon className="w-5 h-5" icon={faGear} />
        </Button>
      </Link>
    </>
  );
}

export default SettingNavLink;
