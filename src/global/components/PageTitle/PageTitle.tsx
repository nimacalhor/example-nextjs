 
import Link from "next/link";

type PageTitleProps = { text: string };

function PageTitle({ text }: PageTitleProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl">{text}</h2>
        <Link href={"/"} >go back</Link>
      </div>
    </>
  );
}

export default PageTitle;
