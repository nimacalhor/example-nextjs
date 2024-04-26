"use client";
import { ScrollArea } from "@ui/scroll-area";
import { makeArray } from "@global/utils/array-utils";
import React from "react";
import InstaImage from "../InstaImage";
import { useSelector } from "react-redux";
import { RootState } from "@global/store";
import Link from "next/link";

type MediaGridProps = {};

function MediaGrid({}: MediaGridProps) {
  const { nsfw } = useSelector((state: RootState) => state.media);

  return (
    <>
      <ScrollArea className="h-[75vh] md:px-3">
        <div className="w-full h-fit grid grid-cols-2 sm:grid-cols-3 gap-1">
          {makeArray(30).map((num) => (
            <>
              <Link href={"/media/121314"}>
                <InstaImage nsfw={nsfw} />
              </Link>
            </>
          ))}
        </div>
      </ScrollArea>
    </>
  );
}

export default MediaGrid;
