// "use client"
import Title from "@global/components/Title";
import Link from "next/link";
 

type HeaderProps = {};

function Header({}: HeaderProps) {
  return (
    <>
      <header className="flex items-center justify-center pt-3 mb-10">
        <Link passHref href={"/"}>
          <Title engClass="text-4xl sm:text-5xl lg:text-6xl" faClass="sm:text-lg lg:text-2xl" />
        </Link>
      </header>
    </>
  );
}

export default Header;