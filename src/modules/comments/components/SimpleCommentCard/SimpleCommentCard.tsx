import AutoDirText from "@global/components/AutoDirText";
import { cn } from "@global/utils/chadcn-utils";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { Skeleton } from "@ui/skeleton";

type SimpleCommentCardProps = { pClassName?: string };

function SimpleCommentCard({ pClassName }: SimpleCommentCardProps) {
  return (
    <>
      <div className="w-full transition-all ease-in border-2 bg-card dark:bg-accent hover:bg-gradient-to-br from-white to-[#eaf5ff] dark:hover:from-[#1e293b] dark:hover:to-[#2f3f59] rounded-xl border-border hover:cursor-pointer hover:shadow-md dark:hover:shadow-[#00264d] hover:border-primary justify-evenly active:shadow-none active:border-4 p-2">
        <div className="flex flex-row items-center justify-start gap-1 h-fit">
          <Avatar className="w-8 h-8">
            <AvatarImage></AvatarImage>
            <AvatarFallback>
              <Skeleton className="w-full h-full rounded-full dark:bg-gray-600" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-sm ">username</h3>
          </div>
        </div>
        {/* <Separator orientation="horizontal" className="my-2 w-[90%] mx-auto bg-gray-200"/> */}
        <div className="">
          <div className={cn("text-xs pt-3 px-1 overflow-hidden", pClassName)}>
            <AutoDirText
              caption="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
              len={320}
            />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default SimpleCommentCard;
