"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select";
import { cn } from "@global/utils/chadcn-utils";
import { useState } from "react";
import { Control, ControllerRenderProps } from "react-hook-form";
import { STATUS_TITLES } from "../../constants/account-status";

type AccountFormStatusProps = {
  control: Control<any>;
  disabled?: boolean;
};

function AccountFormStatus({
  control,
  disabled = false,
}: AccountFormStatusProps) {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <>
      <FormField
        control={control}
        name="status"
        disabled={disabled}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-foreground/60 text-sm flex flex-row items-center gap-2">
              <span>وضعیت</span>
              <div
                className={cn(
                  "w-2 h-2 rounded-full"
                  // STATUS_BG_COLORS[status]
                )}
              ></div>
            </FormLabel>
            <Select disabled={disabled} onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger
                  disabled={disabled}
                  className="disabled:opacity-100 disabled:text-md disabled:cursor-default"
                >
                  <SelectValue
                    className="group"
                    placeholder={
                      field.value ? (
                        (STATUS_TITLES as any)[field.value]
                      ) : (
                        <span>وضعیت اکانت</span>
                      )
                    }
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent defaultChecked defaultValue={field.value}>
                {Object.entries(STATUS_TITLES).map(
                  ([statusKey, statusValue], i) => (
                    <SelectItem key={i} value={statusKey}>
                      {statusValue}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>

            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );

  function changeHandler(field: ControllerRenderProps<any, "status">) {
    field.onChange();
  }
}

export default AccountFormStatus;
