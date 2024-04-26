 
import { Badge } from "@ui/badge";
import { cn } from "@global/utils/chadcn-utils";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BadgeWithDeleteButtonProps = {
  text: string;
  className?: string;
  onDelete?: () => void;
  iconClassName?: string;
  textClassName?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  disable?: boolean;
};

function BadgeWithDeleteButton({
  text,
  variant = "secondary",
  disable = false,
  onDelete,
  className,
  iconClassName,
  textClassName,
}: BadgeWithDeleteButtonProps) {
  return (
    <>
      <Badge
        variant={variant}
        className={cn(
          "mx-[0.1rem] hover:bg-muted bg-muted px-2 inline-flex gap-1 items-center justify-between",
          className
        )}
      >
        {!disable && (
          <FontAwesomeIcon
            onClick={onDelete}
            className={cn(
              "hover:cursor-pointer hover:bg-destructive/10 dark:hover:bg-destructive/80 dark:hover:text-foreground transition-colors h-3 w-3 p-[0.15rem] rounded-full bg-background text-destructive",
              iconClassName
            )}
            icon={faXmark}
          />
        )}
        <span className={textClassName}>{text}</span>
      </Badge>
    </>
  );
}

export default BadgeWithDeleteButton;
