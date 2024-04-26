import { cn } from "@global/utils/chadcn-utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-400 dark:bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
