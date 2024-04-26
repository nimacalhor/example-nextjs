import { AspectRatio } from "@ui/aspect-ratio";
import { Skeleton } from "@ui/skeleton";
 

type InstaImageSkeletonProps = {};

function InstaImageSkeleton({}: InstaImageSkeletonProps) {
  return (
    <>
      <AspectRatio className="w-full" ratio={1}>
        <Skeleton className="w-full h-full" />
      </AspectRatio>
    </>
  );
}

export default InstaImageSkeleton;
