"use client";

 
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as faLightbulbSolid } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@ui/button";

function ModeToggler(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  const { setTheme, theme } = useTheme();

  return (
    <div {...props}>
      <Button variant="outline" className="bg-transparent rounded-full" size="icon" onClick={clickHandler}>
        <FontAwesomeIcon 
          icon={faLightbulb}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <FontAwesomeIcon
          icon={faLightbulbSolid}
          className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark`}
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );

  function clickHandler() {
    if (!theme) return setTheme("dark");
    if (theme === "light") return setTheme("dark");
    if (theme === "dark") return setTheme("light");
  }
}

export default ModeToggler;
