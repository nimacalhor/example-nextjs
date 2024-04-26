import { z } from "zod";

const SearchItemSchema = z.object({
  operator: z
    .enum(["eq", "neq", "gt", "lt", "regex"])
    .refine((data) => data !== undefined, {
      message:
        "فیلد 'operator' اجباری است و باید یکی از مقادیر 'eq'، 'neq'، 'gt'، 'lt' یا 'regex' باشد",
    }),
  queryKey: z.string().refine((data) => data !== undefined, {
    message: "فیلد 'queryKey' اجباری است و باید یک رشته باشد",
  }),
  queryValue: z.string().refine((data) => data !== undefined, {
    message: "فیلد 'queryValue' اجباری است و باید یک رشته باشد",
  }),
  queryType: z
    .enum(["string", "number", "date"])
    .refine((data) => data !== undefined, {
      message:
        "فیلد 'queryType' اجباری است و باید یکی از مقادیر 'string'، 'number' یا 'date' باشد",
    }),
  allowedOperators: z.array(z.string()).refine((data) => data.length > 0, {
    message: "allowedOperators نمی‌توانند خالی باشند",
  }),
  allowedTypes: z.array(z.string()).refine((data) => data.length > 0, {
    message: "allowedTypes نمی‌توانند خالی باشند",
  }),
});

const InputValueSchema = z.object({
  items: z.array(SearchItemSchema).refine((data) => data.length > 0, {
    message: "آیتم‌ها نمی‌توانند خالی باشند",
  }),
  condition: z.enum(["AND", "OR"]).refine((data) => !!data, {
    message: "شرط باید یکی از 'AND' یا 'OR' باشد",
  }),
});

export const AdvancedSearchSchema = z.object({
  data: InputValueSchema,
});
