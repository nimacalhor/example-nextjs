import { MediaUser } from "@/modules/media/types/media-types";
import AutoDirText from "@global/components/AutoDirText";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { Button } from "@ui/button";
import { Card, CardContent, CardFooter } from "@ui/card";
import { Skeleton } from "@ui/skeleton";
import Link from "next/link";

type ResponsiveProfileCardProps = { user: MediaUser };

function ResponsiveProfileCard({ user }: ResponsiveProfileCardProps) {
  const { full_name, id, profile_pic_url, username } = user;

  return (
    <>
      <Card className="p-2 pt-6 md:pt-2 sm:grid items-center justify-center md:inline-block grid-cols-1 sm:grid-cols-6 grid-rows-3 gap-y-3 lg:p-4 h-full md:h-full w-full md:col-span-2 xl:col-span-2 2xl:col-span-3 relative">
        {/* <CardTargetButton /> */}
        {/* <AddBookmarkButton className="absolute top-2 right-2" content={}/> */}
        <div className="flex flex-col items-center justify-center gap-2 sm:col-start-5 sm:col-end-7 sm:row-span-3 md:h-52">
          <Avatar className="w-36 h-36 md:w-36 md:h-36">
            <AvatarImage></AvatarImage>
            <AvatarFallback className="bg-white dark:bg-card">
              <Skeleton className="w-full h-full rounded-full" />
            </AvatarFallback>
          </Avatar>
          <h3 className="text-lg md:text-2xl">{username}</h3>
        </div>
        <div className="relative left-0 right-0 hidden h-20 grid-cols-3 gap-1 px-6 mb-2 md:grid full">

        </div>
        <CardContent className="sm:col-start-1 sm:col-end-5 sm:row-span-3 ">
          <AutoDirText
            pClassName="text-sm md:text-medium"
            len={200}
            caption="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          />
        </CardContent>
        <CardFooter className="col-span-6 sm:row-span-1">
          <Link href={"/profiles/12344"} className="block w-full">
            <Button variant={"secondary"} className="block w-full">
              جزییات بیشتر
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

export default ResponsiveProfileCard;
