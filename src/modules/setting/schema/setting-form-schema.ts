import { z } from "zod";
import {
  AVAILABLE_OPERATORS,
  AVAILABLE_TYPES,
  MAX_DELAY_MAX,
  MAX_DELAY_MIN,
  MIN_DELAY_MAX,
  MIN_DELAY_MIN,
  REQUEST_COUNT_MAX,
} from "../constants/settings-constants";

const allowedOperatorsSchema = z
  .array(z.enum(AVAILABLE_OPERATORS as [string, ...string[]]))
  .nonempty();

const allowedTypesSchema = z
  .array(z.enum(AVAILABLE_TYPES as [string, ...string[]]))
  .nonempty();

export const engineSettingSchema = z.object({
  requestCount: z
    .string()
    .transform((str) => parseInt(str, 10)) // Convert string to number
    .refine((value) => !isNaN(value), {
      message: `مقدار "requestCount" باید عدد باشد`, // Custom error message
    })
    .refine((value) => value <= REQUEST_COUNT_MAX, {
      // Min and Max validation
      message: `مقدار "requestCount" باید عدد بین 0 و ${REQUEST_COUNT_MAX} باشد`, // Custom error message
    }),
  minDelay: z
    .string()
    .transform((str) => parseInt(str, 10))
    .refine((value) => !isNaN(value) && value >= MIN_DELAY_MIN, {
      message: `مقدار "minDelay" باید عدد و حداقل ${MIN_DELAY_MIN} میلی ثانیه باشد`, // Custom error message
    })
    .refine((value) => value <= MIN_DELAY_MAX, {
      // Max validation
      message: `مقدار "maxDelay" باید عدد و حداکثر ${MIN_DELAY_MAX} میلی ثانیه باشد`, // Custom error message
    }),
  maxDelay: z
    .string()
    .transform((str) => parseInt(str, 10))
    .refine((value) => !isNaN(value) && value >= MAX_DELAY_MIN, {
      message: `مقدار "maxDelay" باید عدد و حداقل ${MAX_DELAY_MIN} میلی ثانیه باشد`, // Custom error message
    })
    .refine((value) => !isNaN(value) && value <= MAX_DELAY_MAX, {
      message: `مقدار "maxDelay" باید عدد و حداکثر ${MAX_DELAY_MAX} میلی ثانیه باشد`, // Custom error message
    }),
});
export type EngineSettingForm = z.infer<typeof engineSettingSchema>;
