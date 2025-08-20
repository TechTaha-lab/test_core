import { CustomBanner } from "../custom-banner/custom-banner";
import { SideTabs } from "../custom-side-tabs/custom-side-tabs";
import { useState } from "react";
import vector from "../../assets/images/Vector.svg";
import files from "../../assets/images/Files.svg";
import clock from "../../assets/images/ClockCounterClockwise.png";
import { CustomStepper } from "../custom-cards/custom-cards";

interface IStep {
  id: number;
  title: string;
  date: string;
  active?: boolean;
}

const DisputeSessions_D01_2014 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      title: "معلومات الملف",
      icon: vector,
      component: <img src={vector} alt="" className="w-full rounded hidden lg:block" />,
    },
    {
      title: "الملفات القضائية",
      icon: files,
      component: <img src={files} alt="" className="w-full rounded" />,
    },
    {
      title: "سجل الملف",
      icon: clock,
      component: <img src={clock} alt="" className="w-full rounded" />,
    },
  ];

  const steps: IStep[] = [
    { id: 1, title: "في انتظار اجراءك", date: "12/8/2023", active: true },
    { id: 2, title: "في انتظار اجراءك", date: "12/8/2023" },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50" style={{ width: "1200px" }} id="main">
      <div className="w-full mt-4 px-4 md:px-8" dir="rtl">
        <CustomBanner
          title="ملف منازعة D01/2014"
          isArabic
          className="bg-gradient-to-r from-yellow-100 to-yellow-200 shadow-md rounded-lg p-4 text-center w-full text-xl font-bold"
        />
      </div>

      <div className="flex flex-col lg:flex-row min-w-full mt-6 px-4 md:px-8 gap-6">
        <div className="flex-1 flex flex-col gap-6">
          <div className="w-full mt-4">
            <CustomStepper
              steps={steps}
              description="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي"
              className="ml-0 lg:ml-[500px]"
            />

            <div className="mt-3 flex justify-end" dir="rtl">
              <button className="aegov-btn btn-outline" type="button">
                إلغاء
              </button>
            </div>
          </div>

          <div className="lg:hidden w-full bg-white shadow-sm p-4 rounded mt-6" dir="rtl">
            <SideTabs
              tabs={tabsData.map((tab, index) => ({
                title: (
                  <div
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center justify-between flex-row-reverse gap-2 px-4 py-2 rounded cursor-pointer transition-colors ${
                      activeTab === index
                        ? "bg-[#F2ECCF] text-[#5D3B26]"
                        : "text-gray-700 hover:bg-[#F2ECCF] hover:text-[#5D3B26]"
                    }`}
                  >
                    <span className="text-sm md:text-base">{tab.title}</span>
                    <img src={tab.icon} alt="icon" className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                ),
                component: <div className="mt-2">{tab.component}</div>,
              }))}
              contentClassName="p-0"
              className="w-full"
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </div>

        <div className="hidden lg:block w-64 bg-white shadow-sm p-4 flex-shrink-0" dir="rtl">
          <SideTabs
            tabs={tabsData.map((tab, index) => ({
              title: (
                <div
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center justify-between flex-row-reverse gap-2 px-4 py-2 rounded cursor-pointer transition-colors ${
                    activeTab === index
                      ? "bg-[#F2ECCF] text-[#5D3B26]"
                      : "text-gray-700 hover:bg-[#F2ECCF] hover:text-[#5D3B26]"
                  }`}
                >
                  <span className="text-sm md:text-base">{tab.title}</span>
                  <img src={tab.icon} alt="icon" className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              ),
              component: <div className="mt-2">{tab.component}</div>,
            }))}
            contentClassName="p-0"
            className="w-full"
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
};

export default DisputeSessions_D01_2014;
