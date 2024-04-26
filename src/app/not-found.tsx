import { Button } from "@ui/button";
import Link from "next/link";
 

type NotFoundPageProps = {};

function NotFoundPage({}: NotFoundPageProps) {
  //   80 * 2 + 2px
  return (
    <section className="h-[calc(100vh-84px)] flex justify-center items-center">
      <div className="relative">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-br from-primary/20 select-none to-secondary/30 drop-shadow-xl text-[43vw] md:text-[30vw] lg:text-[25vw] xl:text-[20vw] ">
          404
        </h2>
        <div className="flex flex-col justify-center items-center w-full relative -translate-y-2/3">
          <p className="text-secondary-foreground/80 text-lg sm:text-xl md:text-2xl mx-auto ">
            {"صفحه مورد نظر پیدا نشد :("}
          </p>
          <Link
            href={"/"}
            className=""
          >
            <Button variant={"link"}>بازگشت به خانه</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
