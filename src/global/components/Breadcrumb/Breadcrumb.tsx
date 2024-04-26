"use client";
import Link from "next/link";
import { Fragment } from "react";
import { Button } from "@ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@global/utils/chadcn-utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

type BreadcrumbProps = {
  items: {
    title: string;
    href: string;
  }[];
  className?: string;
  path?: string;
};

function Breadcrumb({ items, className, path }: BreadcrumbProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start gap-1",
          className
        )}
      >
        <Link href={"/"}>
          <Button variant={"link"} size={"sm"} className="font-light">
            {"خانه"}
          </Button>
        </Link>
        {items.map(({ title, href }, i) => (
          <Fragment key={i}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-foreground/80 h-4 w-4"
            />
            {href === pathname ? (
              <Button
                disabled={href === pathname}
                variant={"link"}
                size={"sm"}
                className={cn(
                  "font-light",
                  href === pathname && "text-foreground hover:cursor-default"
                )}
              >
                {title}
              </Button>
            ) : (
              <>
                <Link href={href}>
                  <Button
                    disabled={href === pathname}
                    variant={"link"}
                    size={"sm"}
                    className={cn(
                      "font-light",
                      href === pathname &&
                        "text-foreground hover:cursor-default"
                    )}
                  >
                    {title}
                  </Button>
                </Link>
              </>
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default Breadcrumb;
