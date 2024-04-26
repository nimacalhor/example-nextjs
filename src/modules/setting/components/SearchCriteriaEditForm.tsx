"use client";
import React, { useEffect, useReducer } from "react";
import { Control, UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SearchCriteriaForm,
  searchCriteriaSchema,
} from "../schema/search-criteria-schema";
import { Button } from "@ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/form";
import { Input } from "@ui/input";
import { Separator } from "@/global/ui/separator";
import { CheckFormField } from "./CheckFormField";

type FormType = UseFormReturn<
  {
    key: string;
    availableTypes: {
      string: boolean;
      number: boolean;
      boolean: boolean;
    };
    comparison: {
      regex: boolean;
      eq: boolean;
      neq: boolean;
      gt: boolean;
      lt: boolean;
    };
  },
  any,
  undefined
>;

type NameTypes =
  | "availableTypes"
  | "comparison"
  | "key"
  | "availableTypes.string"
  | "availableTypes.number"
  | "availableTypes.boolean"
  | "comparison.eq"
  | "comparison.gt"
  | "comparison.lt"
  | "comparison.neq"
  | "comparison.regex";

export type CheckFieldsNameTypes =
  | "availableTypes.string"
  | "availableTypes.number"
  | "availableTypes.boolean"
  | "comparison.eq"
  | "comparison.gt"
  | "comparison.lt"
  | "comparison.neq"
  | "comparison.regex";

export type FormControlType =
  | Control<{
      availableTypes: {
        string: boolean;
        number: boolean;
        boolean: boolean;
      };
      comparison: {
        eq: boolean;
        gt: boolean;
        lt: boolean;
        neq: boolean;
        regex: boolean;
      };
      key: string;
    }>
  | undefined;

type ActiveStates = {
  string?: boolean | undefined;
  number?: boolean | undefined;
  boolean?: boolean | undefined;
  eq?: boolean | undefined;
  gt?: boolean | undefined;
  lt?: boolean | undefined;
  neq?: boolean | undefined;
  regex?: boolean | undefined;
};

const initialActiveState: ActiveStates = {
  string: undefined,
  number: undefined,
  boolean: undefined,
  eq: undefined,
  gt: undefined,
  lt: undefined,
  neq: undefined,
  regex: undefined,
};

type ActiveStateActionType = {
  string?: boolean;
  number?: boolean;
  boolean?: boolean;
  eq?: boolean;
  gt?: boolean;
  lt?: boolean;
  neq?: boolean;
  regex?: boolean;
};

function reducer(state: ActiveStates, action: ActiveStateActionType) {
  return { ...state, ...action };
}

type SearchCriteriaEditFormProps = {};

function SearchCriteriaEditForm({}: SearchCriteriaEditFormProps) {
  const form = useForm<SearchCriteriaForm>({
    resolver: zodResolver(searchCriteriaSchema),
    defaultValues: {},
  });
  const [state, mergeState] = useReducer(reducer, initialActiveState);

  useEffect(() => {
    const subscription = form.watch(
      ({ key, availableTypes, comparison }, { name, type }) => {
        mergeState({ ...availableTypes, ...comparison });
      }
    );
    return () => subscription.unsubscribe();
  }, [form, mergeState]);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="text-left space-y-5"
          dir="ltr"
        >
          <FormField
            control={form.control}
            name="key"
            render={({ field, formState }) => (
              <FormItem>
                <FormLabel>key</FormLabel>
                <FormControl>
                  <Input placeholder="key" {...field} />
                </FormControl>
                <FormDescription>document key to query for</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator />
          <h3 className="text-lg font-normal">allowed types</h3>
          <div className="flex justify-start items-start flex-wrap divide-x-2">
            <CheckFormField
              disabled={state.boolean || state.number}
              name="availableTypes.string"
              control={form.control}
            >
              string
            </CheckFormField>
            <CheckFormField
              disabled={state.boolean || state.string}
              name="availableTypes.number"
              control={form.control}
            >
              number
            </CheckFormField>
            <CheckFormField
              disabled={state.string || state.number}
              name="availableTypes.boolean"
              control={form.control}
            >
              boolean
            </CheckFormField>
          </div>
          <Separator />
          <h3 className="text-lg font-normal">allowed operators</h3>
          <div className="flex justify-start items-start divide-x-2 flex-wrap">
            <CheckFormField
              name="comparison.eq"
              control={form.control}
            >
              equal
            </CheckFormField>
            <CheckFormField
              disabled={state.boolean}
              name="comparison.neq"
              control={form.control}
            >
              not equal
            </CheckFormField>
            <CheckFormField
              disabled={state.string || state.boolean}
              name="comparison.gt"
              control={form.control}
            >
              greater than
            </CheckFormField>
            <CheckFormField
              disabled={state.string || state.boolean}
              name="comparison.lt"
              control={form.control}
            >
              less than
            </CheckFormField>
            <CheckFormField
              disabled={state.number || state.boolean }
              name="comparison.regex"
              control={form.control}
            >
              regex
            </CheckFormField>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );

  function onSubmit(values: SearchCriteriaForm) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
}

export default SearchCriteriaEditForm;
