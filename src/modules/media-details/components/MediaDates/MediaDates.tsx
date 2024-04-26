import { Separator } from "@ui/separator";
import { Card, CardContent } from "@ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import MediaDatesTable from "../MediaDatesTable";

type MediaDatesProps = {};

function MediaDates({}: MediaDatesProps) {
  return (
    <>
      <Card className="relative overflow-hidden">
        <div className="p-4 pr-6 relative pl-8 flex flex-row justify-between gap-2 items-center ">
          <div className="flex flex-col justify-start gap-2 z-20">
            <p className="text-xl">تاریخ ها</p>
          </div>
          <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full z-10 bg-gradient-to-r from-card/80"></div>

          <FontAwesomeIcon
            className="w-20 h-20 z-0 text-primary"
            icon={faCalendarDays}
          />
        </div>
        <CardContent>
          <Separator />
          <MediaDatesTable />
        </CardContent>
      </Card>
    </>
  );
}

export default MediaDates;
