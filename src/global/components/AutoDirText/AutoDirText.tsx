"use client";
import { isPersian, truncateString } from "@global/utils/string-utils";
import { cn } from "@global/utils/chadcn-utils";
import { CSSProperties } from "react";

type AutoDirTextProps = {
  caption: string;
  len?: number;
  divClassName?: string;
  pClassName?: string;
  pStyle?: CSSProperties;
  doNotTruncate?: boolean;
};

function AutoDirText({
  len = 300,
  pStyle = {},
  caption,
  pClassName = "",
  divClassName = "",
  doNotTruncate = false,
}: AutoDirTextProps) {
  return (
    <div className={cn("w-full flex flex-col ", divClassName)}>
      {renderParagraphs(doNotTruncate ? caption : truncateString(caption, len))}
    </div>
  );

  function renderParagraphs(text: string) {
    const paragraphs = text.split("\n").map((paragraph, index) => {
      const direction = /^[A-Za-z]+/.test(paragraph.trim()) ? "ltr" : "rtl";
      return (
        <p
          dir={direction}
          key={index}
          style={{ direction: direction, ...pStyle }}
          className={cn(
            "mt-2",
            direction === "rtl" ? "text-right" : "text-left",
            pClassName
          )}
        >
          {paragraph}
        </p>
      );
    });
    return paragraphs;
  }
}

export default AutoDirText;
