import { Button } from "@ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/form";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import type { Control } from "react-hook-form";

type AccountFormFieldProps = {
  label: string;
  control: Control<any>;
  name: string;
  placeholder: string;
  password?: boolean;
  isPasswordVisible?: boolean;
  onEyeClick?: () => void;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

function AccountFormField({
  control,
  label,
  name,
  placeholder,
  password = false,
  isPasswordVisible = false,
  onEyeClick,
  disabled = false,
  ...inputProps
}: AccountFormFieldProps) {
  return (
    <>
      <FormField
        control={control}
        name={name}
        disabled={disabled}
        render={({ field }) => (
          <FormItem className="disabled:cursor-default">
            <FormLabel className="block text-foreground/60 text-sm disabled:cursor-default">
              <Label>{label}</Label>
            </FormLabel>
            <FormControl className="disabled:cursor-default">
              <>
                <div className="relative">
                  <Input
                    disabled
                    {...field}
                    {...(inputProps as any)}
                    className="disabled:opacity-100 disabled:text-lg disabled:hover:cursor-default"
                  />
                  {password && (
                    <Button
                      onClick={onEyeClick}
                      type="button"
                      variant={"ghost"}
                      className={
                        "rounded-full absolute left-3 bottom-0 p-1 hover:bg-transparent"
                      }
                    >
                      <FontAwesomeIcon
                        className="w-5 h-5 text-foreground/50"
                        icon={isPasswordVisible ? faEye : faEyeSlash}
                      />
                    </Button>
                  )}
                </div>
              </>
            </FormControl>
            <FormMessage className="text-xs text-destructive/80 dark:text-destructive dark:text-sm" />
          </FormItem>
        )}
      />
    </>
  );
}

export default AccountFormField;
