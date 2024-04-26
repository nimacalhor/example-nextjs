import * as z from "zod";
import { toFarsiNumber } from "../utils/digit-utils";
import { USERNAME_MAX_LENGTH, USERNAME_MIN_LENGTH } from "../constants/schema";

export const usernameSchema = z
  .string()
  .min(
    USERNAME_MIN_LENGTH,
    `یوزرنیم باید بیشتر از ${USERNAME_MIN_LENGTH} کارکتر باشد`
  )
  .max(
    USERNAME_MAX_LENGTH,
    `یوزرنیم نباید بیشتر از ${toFarsiNumber(USERNAME_MAX_LENGTH)} باشد.`
  )
  .regex(/^[a-zA-Z0-9._]+$/, `یوزرنیم صحیح نمی باشد`);
