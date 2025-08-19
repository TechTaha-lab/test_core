import { CustomBanner } from "../custom-banner/custom-banner";
import { SideTabs } from "../custom-side-tabs/custom-side-tabs";
import { CustomTable } from "../custom-table/custom-table";
import { useState } from "react";
import vector from "../../assets/images/Vector.svg";
import files from "../../assets/images/Files.svg";
import frame from "../../assets/images/Frame 1000006449.svg";
import clock from "../../assets/images/ClockCounterClockwise.png";
import { CustomCard } from "../custom-card/custom-card";
const DisputeDocuments_D01_2014 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    { title: "معلومات الملف", icon: vector, component: <img src={vector} alt="" className="w-full rounded vector" /> },
    { title: "الملفات القضائية", icon: files, component: <img src={files} alt="" className="w-full rounded" /> },
    { title: "سجل الملف", icon: clock, component: <img src={clock} alt="" className="w-full rounded" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 " style={{ width: "1200px" }} id="main">
      {/* Banner */}
      <div className="w-full mt-4 px-4 md:px-8" dir="rtl">
        <CustomBanner
          title="ملف منازعة D01/2014"
          isArabic
          className="bg-gradient-to-r from-yellow-100 to-yellow-200 shadow-md rounded-lg p-4 text-center w-full text-xl font-bold"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row min-w-full mt-6 px-4 md:px-8 gap-6">
        {/* Left/Main Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Header with button */}






          <div className="w-full mt-4">
            <CustomCard
              children={
                <div className="flex flex-col gap-4">
                  {/* Title */}
                  <h1
                    className="text-xl font-bold text-right"
                    style={{ fontSize: "32px", marginBottom: "10px" }}
                  >
                    معلومات ملف المنازعة
                  </h1>

                  {/* First row */}
                  <div className="flex flex-col sm:flex-row justify-between gap-6 border-b" style={{ borderColor: "#E1E3E5", paddingBottom: "12px" }}>
                    {/* حالة الملف */}
                    <div className="flex flex-col sm:ml-[290px] ml-0">
                      <span className="text-gray-600">حالة الملف</span>
                      <span
                        className="px-3 py-1 rounded-md font-medium text-sm"
                        style={{
                          backgroundColor: "#E4F4E7", // bg
                          color: "#2A5133", // text
                        }}
                      >
                        قيد التداول
                      </span>
                    </div>


                    {/* رقم الملف */}
                    <div className="flex flex-col">
                      <span className="text-gray-600">رقم الملف</span>
                      <p
                        className="font-semibold"
                        style={{ color: "#5D3B26", fontSize: "16px" }}
                      >
                        D01/2014
                      </p>
                    </div>
                  </div>

                  {/* Second row */}
                  <div className="flex flex-col sm:flex-row justify-between gap-6 pt-2" dir="rtl">
                    {/* تاريخ التحديث */}
                    <div className="flex flex-col">
                      <span className="text-gray-600">تاريخ التحديث</span>
                      <p
                        className="font-semibold"
                        style={{ color: "#5D3B26", fontSize: "16px" }}
                      >
                        25/12/2023
                      </p>
                    </div>

                    {/* تاريخ الإنشاء */}
                    <div className="flex flex-col sm:ml-[290px] ml-0">
                      <span className="text-gray-600">تاريخ الإنشاء</span>
                      <p
                        className="font-semibold"
                        style={{ color: "#5D3B26", fontSize: "16px" }}
                      >
                        25/12/2023
                      </p>
                    </div>

                  </div>
                </div>
              }
            />

            {/* Cancel button */}
            <div className="mt-3 flex justify-end" dir="rtl">
              <button className="aegov-btn btn-outline" type="button">
                إلغاء
              </button>
            </div>
          </div>


          {/* Show SideTabs inline for small screens only */}
          <div className="lg:hidden w-full bg-white shadow-sm p-4 rounded mt-6" dir="rtl">
            <SideTabs
              tabs={tabsData.map((tab, index) => ({
                title: (
                  <div
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center justify-between flex-row-reverse gap-2 px-4 py-2 rounded cursor-pointer transition-colors ${activeTab === index
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

        {/* Sidebar (hidden on mobile, visible on desktop) */}
        <div className="hidden lg:block w-64 bg-white shadow-sm p-4 flex-shrink-0" dir="rtl">
          <SideTabs
            tabs={tabsData.map((tab, index) => ({
              title: (
                <div
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center justify-between flex-row-reverse gap-2 px-4 py-2 rounded cursor-pointer transition-colors ${activeTab === index
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
  )
}

export default DisputeDocuments_D01_2014