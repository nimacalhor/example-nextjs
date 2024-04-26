import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@global/utils/chadcn-utils";
 

type GradientTextProps = {
  from: `from-${string}`;
  to: `to-${string}`;
  gradientDirection?: "t" | "tr" | "r" | "br" | "b" | "bl" | "l" | "tl";
  via?: `via-${string}`;
  className?: string;
  text?: string;
};

function GradientText({
  from,
  text,
  to,
  gradientDirection = "br",
  via,
  className,
}: GradientTextProps) {
  return (
    <p
      className={cn(
        "bg-clip-text text-transparent",
        gradientDirection ? getGradientDirection() : "",
        from ? from : "",
        to ? to : "",
        via ? `via-${via}` : "",
        className
      )}
    >
      {text}
    </p>
  );

  function getGradientDirection() {
    switch (gradientDirection) {
      status "t":
        return "bg-gradient-to-t";
      status "tr":
        return "bg-gradient-to-tr";
      status "r":
        return "bg-gradient-to-r";
      status "br":
        return "bg-gradient-to-br";
      status "b":
        return "bg-gradient-to-b";
      status "bl":
        return "bg-gradient-to-bl";
      status "l":
        return "bg-gradient-to-l";
      status "tl":
        return "bg-gradient-to-tl";
    }
  }
}

export default GradientText;
