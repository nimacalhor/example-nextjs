import { ScrollArea } from "@ui/scroll-area";
 

type StepsProps = { children: React.ReactNode[]; className?: string };

function Steps({ children, className }: StepsProps) {
  return (
    <>
      <ScrollArea className={className}>
        <ul className="pr-2 sm:pr-3 space-y-3">
          {children.map((child, i) => (
            <li
              key={i}
              className="flex relative bg-gradient-to-l from-primary/5 shadow-sm p-5 border-r-2 border-r-primary min-h-[6rem] h-fit justify-end items-center"
            >
              <span className="absolute top-0 text-primary border border-primary -right-3 bg-background rounded-full h-6 w-6 flex justify-center items-center">
                {i + 1}
              </span>
              {child}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </>
  );
}

export default Steps;
