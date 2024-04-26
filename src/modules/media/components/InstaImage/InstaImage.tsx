"use client"
import { RootState } from "@global/store";
import { cn } from "@global/utils/chadcn-utils";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRandomNumberInRange } from "@global/utils/random-utils";
import { AspectRatio } from "@ui/aspect-ratio";
import Image from "next/image";
import { ComponentProps } from "react";

type InstaImageProps = {
  nsfw?: boolean;
  ratioClassName?: string;
  imgClassName?: string;
} & Partial<ComponentProps<typeof Image>>;

function InstaImage({
  nsfw,
  alt,
  quality = 30,
  ratioClassName,
  imgClassName,
  ...props
}: InstaImageProps) {
  const imageSrc = getRandomImage();

  return (
    <>
      <AspectRatio
        className={cn(
          "w-full relative rounded-md overflow-hidden",
          ratioClassName
        )}
        ratio={1}
      >
        <Image
          fill
          {...props}
          src={imageSrc}
          // objectFit="cover"
          quality={quality}
          alt={alt ? alt : ""}
          className={cn(`w-full rounded-md object-cover`, imgClassName)}
        />
        {nsfw && (
          <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-background/10 backdrop-blur-md flex items-center justify-center">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="h-32 w-32 text-background/50"
            />
          </div>
        )}
      </AspectRatio>
    </>
  );

  function getRandomImage() {
    return `/test-image-${getRandomNumberInRange(1, 4)}.jpg`;
  }
}

export default InstaImage;
