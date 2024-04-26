"use client";
import { Form } from "@ui/form";
import dynamic from "next/dynamic";
import { useToast } from "@ui/use-toast";
import { RootState } from "@global/store";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Spinner from "@global/components/Spinner";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import DeleteAccountButton from "../DeleteAccountButton";
import { useEffect, useState, useTransition } from "react";
import { D_PER_PAGE } from "@global/constants/api-constants";
import AccountFormModeToggler from "../AccountFormModeToggler";
import createAccountAction from "../../actions/createAccount-action";
import formSchema, { AccountFormType } from "../../helper/account-form-schema";
import updateAccountAction from "../../actions/updateAccount-action";
import AccountFormField from "../AccountFormField";
import AccountFormStatus from "../AccountFormStatus";
import { DialogFooter } from "@/global/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/global/ui/button";


type AccountFormProps = { closeDialog: () => void };

function AccountForm({ closeDialog }: AccountFormProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPending, setIsPending] = useState(false);
  const { account, editMode } = useSelector(
    (state: RootState) => state.account
  );
  const form = useForm<AccountFormType>({
    resolver: zodResolver(formSchema),
    values: {
      email: account?.email,
      password: account?.password ?? "",
      phoneNumber: account?.phoneNumber,
      username: account?.username ?? "",
      status: account?.status ?? "inactive",
      proxy: account?.proxy,
    },
  });
  const searchParams = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    if (!account || !form) return;
    const { email, password, phoneNumber, status, username } = account;
    form.setValue("email", email);
    form.setValue("password", password);
    form.setValue("phoneNumber", phoneNumber);
    form.setValue("status", status);
    form.setValue("username", username);
  }, [account, form]);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <AccountFormField
            disabled={!editMode}
            name="username"
            control={form.control}
            label={"نام کاربری اکانت"}
            placeholder={"نام کاربری"}
          />
          <AccountFormField
            disabled={!editMode}
            password
            name="password"
            control={form.control}
            label={"رمز ورود اکانت"}
            isPasswordVisible={isPasswordVisible}
            onEyeClick={switchPasswordVisibility}
            type={isPasswordVisible ? "text" : "password"}
            placeholder={isPasswordVisible ? "رمز ورود" : "****"}
          />
          <AccountFormField
            disabled={!editMode}
            name="email"
            type={"email"}
            placeholder={"ایمیل"}
            control={form.control}
            label={"ایمیل متصل به اکانت"}
          />
          <AccountFormField
            disabled={!editMode}
            name="phoneNumber"
            type={"tel"}
            placeholder={"...0912"}
            control={form.control}
            label={"شماره تلفن متصل به اکانت"}
          />
          <AccountFormField
            disabled={!editMode}
            name="proxy"
            type={"text"}
            placeholder={"xxx.xx.xx.xx:xxxx"}
            control={form.control}
            label={"پروکسی"}
          />
          <AccountFormStatus disabled={!editMode} control={form.control} />
          {account && (
            <div className="flex justify-start items-center gap-3">
              <AccountFormModeToggler />
              <DeleteAccountButton closeDialog={closeDialog} />
            </div>
          )}
          {editMode && (
            <DialogFooter>
              <div className="flex justify-between w-full">
                <DialogClose asChild>
                  <Button variant="secondary">انصراف</Button>
                </DialogClose>
                <Button type="submit" className="px-5">
                  {isPending && <Spinner />}
                  {!isPending && "ثبت"}
                </Button>
              </div>
            </DialogFooter>
          )}
        </form>
      </Form>
    </>
  );
  async function onSubmit(values: AccountFormType) {
     
    const page = searchParams.get("page") || 1;
    const perPage = searchParams.get("per_page") || D_PER_PAGE;
    setIsPending(true);

    const [nPage, nPerPage] = [page, perPage].map(Number);

    const action =
      editMode && account
        ? updateAccountAction.bind(null, account._id, values, nPage, nPerPage)
        : createAccountAction.bind(null, values, nPage, nPerPage);
     
    const message = await action();

    console.log({ message });

    const actionVerb = editMode && account ? `ویرایش` : `ذخیره`;

    setIsPending(false);

    if (message)
      toast({
        title: `اکانت ${actionVerb} نشد`,
        description: message,
        variant: `destructive`,
      });
    else {
       
      if (closeDialog) closeDialog();
      toast({
        title: `اکانت با موفقیت ${actionVerb} شد ✅`,
      });
    }
  }
  function switchPasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
}

export default AccountForm;
