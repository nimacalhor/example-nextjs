import { Button } from "@ui/button";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonWithIconProps = { icon: IconDefinition; text: string };

function ButtonWithIcon({ icon, text }: ButtonWithIconProps) {
  return (
    <>
      <Button
        className="flex gap-2 justify-center items-center text-foreground/80"
        variant={"secondary"}
        size={"sm"}
      >
        <span>{text}</span>
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
      </Button>
    </>
  );
}

export default ButtonWithIcon;
