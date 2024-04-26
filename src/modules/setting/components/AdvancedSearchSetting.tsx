"use client";
import { RootState } from "@/global/store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";
import { useSelector } from "react-redux";
import { SearchSettingCard } from "./SearchSettingCard";

type AdvancedSearchSettingProps = {};

function AdvancedSearchSetting({}: AdvancedSearchSettingProps) {
  const { setting, status } = useSelector((state: RootState) => state.setting);
  if (status !== "succeeded" || !setting) return null;

  return (
    <>
      <h2 className="mt-10 text-xl mb-6">تنظیمات جستجوی پیشرفته</h2>
      <Tabs defaultValue="media" className=" w-full xl:hidden">
        <TabsList className="">
          <TabsTrigger value="comment">کامنت</TabsTrigger>
          <TabsTrigger value="profile">پروفایل</TabsTrigger>
          <TabsTrigger value="media">مدیا</TabsTrigger>
        </TabsList>
        <TabsContent dir="rtl" value="media">
          <SearchSettingCard items={setting.queryKeys.media} title="مدیا" />
        </TabsContent>
        <TabsContent dir="rtl" value="profile">
          <SearchSettingCard
            items={setting.queryKeys.profile}
            title="پروفایل"
          />
        </TabsContent>
        <TabsContent dir="rtl" value="comment">
          <SearchSettingCard items={setting.queryKeys.comment} title="کامنت" />
        </TabsContent>
      </Tabs>
      <div className="hidden xl:grid grid-cols-3 gap-2">
        <SearchSettingCard items={setting.queryKeys.media} title="مدیا" />
        <SearchSettingCard items={setting.queryKeys.profile} title="پروفایل" />
        <SearchSettingCard items={setting.queryKeys.comment} title="کامنت" />
      </div>
    </>
  );
}

export default AdvancedSearchSetting;
