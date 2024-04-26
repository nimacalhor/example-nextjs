import { z } from "zod";

export const searchCriteriaSchema = z
  .object({
    // Validation for type selection flags (string, number, boolean)
    availableTypes: z
      .object({
        string: z.boolean(),
        number: z.boolean(),
        boolean: z.boolean(),
      })
      .refine(
        (type) => {
          const selectedTypes = Object.values(type).filter(Boolean).length;
          return selectedTypes === 1;
        },
        {
          message: `فقط یکی از فیلدهای string، number یا boolean باید انتخاب شود`,
        }
      ),

    // Validation for comparison operators (eq, gt, lt, neq, regex)
    comparison: z.object({
      eq: z.boolean(),
      gt: z.boolean(),
      lt: z.boolean(),
      neq: z.boolean(),
      regex: z.boolean(),
    }),

    // Key validation
    key: z.string().min(1, `key نباید خالی باشد`),
  })
  .refine((keys) => {
    const { availableTypes, comparison } = keys;
    const [selectedType] = Object.entries(availableTypes).find(
      ([key, value]) => value
    ) || [null];

    if (!selectedType) return false;

    if (selectedType === "string") {
      if (comparison.gt || comparison.lt) return false;
      //
    } else if (selectedType === "number") {
      if (comparison.regex) return false;
      //
    } else if (selectedType === "boolean") {
      if (comparison.gt || comparison.lt || comparison.neq || comparison.regex)
        return false;
    }
    //
  }, `operator های انتخابی با تایپ های انتخابی تداخل دارند`);

export type SearchCriteriaForm = z.infer<typeof searchCriteriaSchema>;
