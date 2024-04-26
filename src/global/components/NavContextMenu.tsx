"use client";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NAV_ITEMS from "@global/constants/main-page-nav-items";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@ui/context-menu";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Separator } from "../ui/separator";

type NavContextMenuProps = { children: React.ReactNode };

function NavContextMenu({ children }: NavContextMenuProps) {
  const { status } = useSelector((state: RootState) => state.setting);
  const shouldRenderSetting = status === "succeeded";
  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>{children}</ContextMenuTrigger>
        <ContextMenuContent className="text-right w-60">
          {NAV_ITEMS.map((itm, i) => (
            <Link passHref key={i} href={itm.href}>
              <ContextMenuItem className="flex flex-row-reverse justify-between items-center hover:cursor-pointer">
                <span>{itm.text}</span>
                <FontAwesomeIcon icon={itm.icon} />
              </ContextMenuItem>
            </Link>
          ))}
          <Separator className="my-1" orientation="horizontal" />
          {shouldRenderSetting && (
            <Link passHref href={"/setting"}>
              <ContextMenuItem className="flex flex-row-reverse justify-between items-center hover:cursor-pointer">
                <span>{"تنظیمات"}</span>
                <FontAwesomeIcon icon={faGear} />
              </ContextMenuItem>
            </Link>
          )}

        </ContextMenuContent>
      </ContextMenu>
    </>
  );
}

export default NavContextMenu;
