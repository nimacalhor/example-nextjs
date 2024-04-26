import Breadcrumb from "@/global/components/Breadcrumb";
import { Separator } from "@/global/ui/separator";
import statusPageTitle from "@/modules/status-details/components/statusPageTitle";
import AdvancedSearchSetting from "@/modules/setting/components/AdvancedSearchSetting";
import EngineSettingForm from "@/modules/setting/components/EngineSettingForm";
import React from "react";

type settingsProps = {};

function settings({}: settingsProps) {
  return (
    <>
      <section className="mt-8 max-w-screen-2xl mx-auto">
        <h1 className="text-3xl mb-4">تنظیمات انجین</h1>
        <Breadcrumb items={[{ title: "تنظیمات", href: "/settings" }]} />
        <Separator orientation="horizontal" className="my-6" />
        <EngineSettingForm />
        <AdvancedSearchSetting />
      </section>
    </>
  );
}

export default settings;
