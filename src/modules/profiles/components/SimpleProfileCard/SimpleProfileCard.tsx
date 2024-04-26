import AutoDirText from "@global/components/AutoDirText";
import { Card, CardContent } from "@ui/card";
import { Skeleton } from "@ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import React from "react";

type SimpleProfileCardProps = {};

function SimpleProfileCard({}: SimpleProfileCardProps) {
  return (
    <>
      <Card className="relative hover:cursor-pointer transition-shadow hover:shadow-lg">
        <div className="flex flex-col items-center justify-center gap-2 h-52">
          <Avatar className="w-36 h-36">
            <AvatarImage></AvatarImage>
            <AvatarFallback className="bg-white dark:bg-card">
              <Skeleton className="w-full h-full rounded-full" />
            </AvatarFallback>
          </Avatar>
          <h3 className="text-xl">username</h3>
        </div>
        <CardContent className="p-2 sm:p-3 md:p-4 !pt-0">
          <AutoDirText
            pClassName="text-xs font-light"
            len={150}
            caption="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          />
        </CardContent>
      </Card>
    </>
  );
}

export default SimpleProfileCard;
