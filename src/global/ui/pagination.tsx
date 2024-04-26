import * as React from "react";
import {
  faChevronLeft,
  faChevronRight,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

import { cn } from "@global/utils/chadcn-utils";
import { ButtonProps, buttonVariants } from "@ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row-reverse flex-wrap items-center", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("w-[1.5rem] sm:w-9 md:w-10 hover:cursor-pointer", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"p">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  children,
  ...props
}: PaginationLinkProps) => (
  <PaginationItem>
    <p
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        "w-full text-[0.85rem] sm:text-sm font-light sm:font-normal",
        className
      )}
      {...props}
    >{children}</p>
  </PaginationItem>
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <span className="hidden sm:inline-block">قبل</span>
    <FontAwesomeIcon icon={faChevronLeft} className="sm:h-4 sm:w-4 h-3 w-3" />
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <FontAwesomeIcon icon={faChevronRight} className="sm:h-4 sm:w-4 h-3 w-3" />
    <span className="hidden sm:inline-block">بعد</span>
  </PaginationLink>
);

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <FontAwesomeIcon icon={faEllipsis} className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
