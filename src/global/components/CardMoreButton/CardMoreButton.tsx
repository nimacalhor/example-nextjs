import { AspectRatio } from "@ui/aspect-ratio";

type CardMoreButtonProps = {};

function CardMoreButton({}: CardMoreButtonProps) {
  return (
    <>
      <AspectRatio
        className="w-full hover:cursor-pointer border-2 border-transparent hover:border-primary transition-colors flex justify-center items-center bg-gradient-to-br from-muted to-secondary relative rounded-md overflow-hidden group"
        ratio={1}
      >
        <span className="text-muted-foreground text-xl transition-colors group-hover:text-primary">
          <span>بیشتر </span>
          <span>...</span>
        </span>
      </AspectRatio>
    </>
  );
}

export default CardMoreButton;
