 
import { cn } from "@global/utils/chadcn-utils";

type ToolbarProps = { children: React.ReactNode; className?: string };

function Toolbar({ children, className = "" }: ToolbarProps) {
  return (
    <>
      <section
        className={cn(
          "h-32 sm:h-40 mb-16 flex flex-row justify-evenly items-center flex-wrap ",
          className
        )}
      >
        {children}
      </section>
    </>
  );
}

export default Toolbar;
