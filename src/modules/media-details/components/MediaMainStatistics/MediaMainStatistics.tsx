import React from "react";

import { Card } from "@ui/card";
import { faComment, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MediaDetail } from "@/modules/media/types/media-types";

type MediaMainStatisticsProps = { mediaDetail: MediaDetail };

function MediaMainStatistics({ mediaDetail }: MediaMainStatisticsProps) {
  const { comment_count, like_count, play_count } = mediaDetail;
  return (
    <>
      <Card className="p-3 flex justify-evenly items-center gap-2">
        <div className="bg-secondary h-24 w-24 rounded-lg flex flex-col gap-1 justify-center items-center">
          <FontAwesomeIcon
            className="h-10 w-10 dark:text-primary text-primary/80"
            icon={faHeart}
          />
          <span>{like_count}</span>
        </div>
        <div className="bg-secondary h-24 w-24 rounded-lg flex flex-col gap-1 justify-center items-center">
          <FontAwesomeIcon
            className="h-10 w-10 dark:text-primary text-primary/80"
            icon={faComment}
          />
          <span>{comment_count}</span>
        </div>
        <div className="bg-secondary h-24 w-24 rounded-lg flex flex-col gap-1 justify-center items-center">
          <FontAwesomeIcon
            className="h-10 w-10 dark:text-primary text-primary/80"
            icon={faEye}
          />
          <span>{play_count}</span>
        </div>
      </Card>
    </>
  );
}

export default MediaMainStatistics;
