import { cn } from "@global/utils/chadcn-utils";
 

type TitleOnBorderProps = {
  title: string;
  spanClassName?: string;
  borderClassName?: string;
  children: React.ReactNode;
  containerClassName?: string;
};

function TitleOnBorder({
  title,
  children,
  spanClassName = "",
  borderClassName = "",
  containerClassName = "",
}: TitleOnBorderProps) {
  return (
    <>
      <div
        className={cn(
          "relative border-border border-2 rounded-lg min-h-[5rem] mt-5 pt-10 pb-5",
          borderClassName
        )}
      >
        <span
          className={cn(
            "absolute -top-2 text-muted-foreground right-3 bg-background px-2 rounded-md",
            spanClassName
          )}
        >
          {title}
        </span>
        <div className={cn("w-[97%] mx-auto ", containerClassName)}>
          {children}
        </div>
      </div>
    </>
  );
}

export default TitleOnBorder;
