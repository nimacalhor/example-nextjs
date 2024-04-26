import * as z from "zod";
import { toFarsiNumber } from "@global/utils/digit-utils";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import { usernameSchema } from "@global/helper/schema-helper";
import { STATUS_TITLES_ARRAY_ENG } from "../constants/account-status";
import { PASSWORD_MIN_LENGTH } from "../constants/account-form-validation";
import { FIELD_REQUIRED_ERR_MSG } from "@global/constants/schema";

const proxyRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,5}$/;

const formSchema = z.object({
  username: usernameSchema,
  password: z
    .string({ required_error: FIELD_REQUIRED_ERR_MSG })
    .min(
      PASSWORD_MIN_LENGTH,
      `پسوورد باید حداقل ${toFarsiNumber(
        PASSWORD_MIN_LENGTH
      )} کارکتر داشته باشد`
    ),
  email: z.string().email(`ایمیل صحیح نمی باشد`).optional(),
  phoneNumber: z
    .string()
    .refine(isMobilePhone, `شماره تلفن صحیح نمی باشد`)
    .optional(),
  status: z.enum(STATUS_TITLES_ARRAY_ENG),
  proxy: z
    .string({ required_error: FIELD_REQUIRED_ERR_MSG })
    .regex(proxyRegex, "فرمت پروکسی صحیح نیست")
    .optional(),
});

export type AccountFormType = z.infer<typeof formSchema>;
export default formSchema;
