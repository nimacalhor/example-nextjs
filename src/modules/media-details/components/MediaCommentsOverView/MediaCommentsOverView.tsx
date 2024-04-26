import { Button } from "@ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@ui/card";
import { makeArray } from "@global/utils/array-utils";
import SimpleCommentCard from "@comments/components/SimpleCommentCard";

type MediaCommentsOverViewProps = {};

function MediaCommentsOverView({}: MediaCommentsOverViewProps) {
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>کامنت ها</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          {makeArray(5).map((num) => (
            <SimpleCommentCard pClassName="text-sm" key={num} />
          ))}
        </CardContent>
        <div className="w-full flex flex-col gap-2 justify-center items-center mb-4">
          <Button size={"lg"}>مشاهده بیشتر</Button>
        </div>
      </Card>
    </>
  );
}

export default MediaCommentsOverView;
