"use client";
import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "@ui/form";
import { Checkbox } from "@/global/ui/checkbox";
import {
  FormControlType,
  CheckFieldsNameTypes,
} from "./SearchCriteriaEditForm";
import { cn } from "@/global/utils/chadcn-utils";

export function CheckFormField({
  control,
  name,
  children,
  disabled = false,
}: {
  control: FormControlType;
  name: CheckFieldsNameTypes;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex justify-center items-center gap-2 px-3">
          <FormControl>
            <Checkbox
              disabled={disabled}
              checked={!!field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div>
            <FormLabel className={cn(disabled && "text-muted-foreground")}>{children}</FormLabel>
          </div>
        </FormItem>
      )}
    />
  );
}
