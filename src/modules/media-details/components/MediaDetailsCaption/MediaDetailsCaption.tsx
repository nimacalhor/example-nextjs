"use client";
import { useState } from "react";
import { Button } from "@ui/button";
import { Card, CardContent } from "@ui/card";
import AutoDirText from "@global/components/AutoDirText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FONT_SIZE, LINE_HEIGHT } from "../../constants/media-caption-styles";
import {
  faPlus,
  faMinus,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import type { MediaDetail } from "@/modules/media/types/media-types";

type MediaDetailsCaptionProps = { mediaDetail: MediaDetail };

function MediaDetailsCaption({ mediaDetail }: MediaDetailsCaptionProps) {
  const [fontSize, setFontSize] = useState(FONT_SIZE);
  const [lineHeaight, setLineHeaight] = useState(LINE_HEIGHT);
  const { caption } = mediaDetail;

  return (
    <>
      <Card className="w-full">
        <CardContent className="pb-2 md:p-5">
          <div className="w-full flex justify-end items-center gap-5 md:gap-1 mb-3">
            <Button onClick={resetHandler} variant={"outline"} size={"sm"}>
              <FontAwesomeIcon icon={faRotateLeft} />
            </Button>
            <Button
              onClick={getChangeFontSizeHandler("minus")}
              variant={"outline"}
              size={"sm"}
            >
              <FontAwesomeIcon icon={faMinus} />
            </Button>
            <Button
              onClick={getChangeFontSizeHandler("add")}
              variant={"outline"}
              size={"sm"}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>
          <AutoDirText
            pStyle={{
              fontSize: `${fontSize}px`,
              lineHeight: `${lineHeaight}px`,
            }}
            pClassName="leading-7"
            len={caption.length}
            caption={caption}
          />
        </CardContent>
      </Card>
    </>
  );

  function getChangeFontSizeHandler(sign: "add" | "minus") {
    if (sign === "add")
      return () => {
        setFontSize((fs) => fs + 2);
        setLineHeaight((lh) => lh + 2);
      };
    else
      return () => {
        setFontSize((fs) => fs - 1);
        setLineHeaight((lh) => lh - 1);
      };
  }

  function resetHandler() {
    setFontSize(FONT_SIZE);
    setLineHeaight(LINE_HEIGHT);
  }
}

export default MediaDetailsCaption;
