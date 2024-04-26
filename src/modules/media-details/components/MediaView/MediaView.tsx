import { Card } from "@ui/card";
import InstaImageSlides from "@media/components/InstaImageSlides";

type MediaViewProps = {};

function MediaView({}: MediaViewProps) {
  return (
    <>
      <Card className="p-2 md:p-4 w-full md:col-span-3 xl:h-full xl:col-span-5 2xl:col-span-6 flex justify-center items-center">
        <div className="w-[70vw] h-[70vw] md:h-[min(60vh,40vw)] md:w-[min(60vh,40vw)] mx-auto ">
          <InstaImageSlides srcSet={[""]} quality={100} />
        </div>
      </Card>
    </>
  );
}

export default MediaView;
