import { AdvancedSearchState } from "../types/search-item-types";
import {
  getUniqueStringByDate,
  getZodErrorMessages,
} from "@global/utils/string-utils";
import { AdvancedSearchSchema } from "@advanced-search/schema/json-file-search-schema";
import { ZodError } from "zod";
import { readFileAsText } from "@/global/utils/file-util";

export async function parseSearchJson(
  formData: FormData
): Promise<Omit<AdvancedSearchState, "dialog"> | string> {
  const file = formData.get("file");

   

  if (!file || !(file instanceof File))
    return "فایلی برای اعتبار سنجی وجود ندارد";

  try {
    const fileContent = await readFileAsText(file as File);
    const jsonValue = JSON.parse(fileContent);

    const schemaResult = AdvancedSearchSchema.parse({ data: jsonValue });

     

    return {
      condition: schemaResult.data.condition,
      items: schemaResult.data.items.map((itm, i) => ({
        ...itm,
        order: i + 1,
        id: getUniqueStringByDate(),
        isFirst: i === 0,
      })),
    };
  } catch (error) {
     
    if (error instanceof ZodError) {
      const errorMessages = getZodErrorMessages(error);
       
      return errorMessages.join(" , ");
    }
    return "اعتبار سنجی فایل با خطا مواجه شد";
  }
}
