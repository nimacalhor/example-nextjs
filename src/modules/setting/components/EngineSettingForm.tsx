"use client";

import { RootState } from "@/global/store";
import { Button } from "@/global/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/global/ui/form";
import { Input } from "@/global/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import updateSettingAction from "../actions/updateSetting-action";
import {
  MAX_DELAY_DESCRIPTION,
  MAX_DELAY_MAX,
  MIN_DELAY_DESCRIPTION,
  MIN_DELAY_MAX,
  REQUEST_COUNT_DESCRIPTION,
  REQUEST_COUNT_MAX,
} from "../constants/settings-constants";
import {
  EngineSettingForm as TEngineSettingForm,
  engineSettingSchema,
} from "../schema/setting-form-schema";
import { D_PER_PAGE } from "@/global/constants/api-constants";
import { useToast } from "@/global/ui/use-toast";
import Spinner from "@/global/components/Spinner";

type EngineSettingFormProps = {};

function EngineSettingForm({}: EngineSettingFormProps) {
  const { status, setting } = useSelector((state: RootState) => state.setting);

  const form = useForm<TEngineSettingForm>({
    resolver: zodResolver(engineSettingSchema),
  });

  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const { toast } = useToast();

  useEffect(() => {
     
    if (status !== "succeeded") return;
    if (!setting) return;
    const { maxDelay, minDelay, requestCount } = setting;

    if (maxDelay && !form.getValues("maxDelay"))
      form.setValue("maxDelay", (maxDelay + "") as unknown as number);

    if (minDelay && !form.getValues("minDelay"))
      form.setValue("minDelay", (minDelay + "") as unknown as number);

    if (requestCount && !form.getValues("requestCount"))
      form.setValue("requestCount", (requestCount + "") as unknown as number);

    //
  }, [status, setting, form]);

  if (status !== "succeeded" || !setting)
    return (
      <div className="h-44 flex justify-center items-center bg-card">
        <h2>اطلاعات تنظیمات به درستی دریافت نشده</h2>
      </div>
    );

  let isButtonDisabled: boolean = false;
  const formMaxDelay = form.getValues("maxDelay");
  const formMinDelay = form.getValues("minDelay");
  const formRequestCount = form.getValues("requestCount");

  if (!formMaxDelay || !formMinDelay || !formRequestCount) {
    isButtonDisabled = true;
  }
  if (
    formMaxDelay + "" === setting.maxDelay + "" &&
    formMinDelay + "" === setting.minDelay + "" &&
    formRequestCount + "" === setting.requestCount + ""
  ) {
    isButtonDisabled = true;
  }
  if (isPending) isButtonDisabled = true;

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="requestCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>request count (تعداد درخواست)</FormLabel>
                  <FormControl>
                    <Input
                      maxLength={REQUEST_COUNT_MAX + "".length}
                      placeholder="request count"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>{REQUEST_COUNT_DESCRIPTION}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="minDelay"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>min delay (حداقل تاخیر)</FormLabel>
                  <FormControl>
                    <Input
                      maxLength={MIN_DELAY_MAX + "".length}
                      placeholder="min delay"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>{MIN_DELAY_DESCRIPTION}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maxDelay"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>max delay (حداکثر تاخیر)</FormLabel>
                  <FormControl>
                    <Input
                      maxLength={MAX_DELAY_MAX + "".length}
                      placeholder="max delay"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>{MAX_DELAY_DESCRIPTION}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isButtonDisabled} className="mt-4 " type="submit">
            {!isPending && <span>ذخیره</span>}
            {isPending && <Spinner />}
          </Button>
        </form>
      </Form>
    </>
  );

  function onSubmit(values: TEngineSettingForm) {
    if (!setting) return;

    const page = searchParams.get("page");
    const per_page = searchParams.get("per_page");
    const nPage = page ? Number(page) : 1;
    const nPer_page = per_page ? Number(per_page) : D_PER_PAGE;

    startTransition(async () => {
      const updateSettingResponse = await updateSettingAction(
        values,
        nPage,
        nPer_page
      );

      if (updateSettingResponse) {
        toast({
          title: `تنظیمات با موفقیت ویرایش نشد`,
          description: updateSettingResponse,
          variant: "destructive",
        });
      } else {
        toast({
          title: `تنظیمات با موفقیت ویرایش شد`,
        });
      }
    });
  }
}

export default EngineSettingForm;
