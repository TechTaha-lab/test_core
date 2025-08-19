import { CustomBanner } from "../custom-banner/custom-banner";
import { SideTabs } from "../custom-side-tabs/custom-side-tabs";
import { CustomTable } from "../custom-table/custom-table";
import { useState } from "react";
import vector from "../../assets/images/Vector.svg";
import files from "../../assets/images/Files.svg";
import frame from "../../assets/images/Frame 1000006449.svg";
import clock from "../../assets/images/ClockCounterClockwise.png";
import './d1.css';

const DisputeDetails_D01_2014 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    { title: "معلومات الملف", icon: vector, component: <img src={vector} alt="" className="w-full rounded vector" /> },
    { title: "الملفات القضائية", icon: files, component: <img src={files} alt="" className="w-full rounded" /> },
    { title: "سجل الملف", icon: clock, component: <img src={clock} alt="" className="w-full rounded" /> },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 max-w-[100%] mx-auto" id="main">
      
      {/* Banner */}
      <div className="w-full mt-4 px-4 md:px-8" dir="rtl">
        <CustomBanner
          title="ملف منازعة D01/2014"
          isArabic
          className="bg-gradient-to-r from-yellow-100 to-yellow-200 shadow-md rounded-lg p-4 text-center w-full text-lg sm:text-xl md:text-2xl font-bold"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_16rem] gap-12 mt-6 px-4 md:px-8">
        
        {/* Left / Main Content */}
        <div className="flex flex-col gap-6">
          
          {/* Header + Add Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2" dir="rtl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center sm:text-right w-full sm:w-auto">
              الملفات القضائية (القيود)
            </h3>
            <button className="aegov-btn w-full sm:w-auto mt-2 sm:mt-0">إضافة قيد +</button>
          </div>

          {/* Search */}
          <div className="flex justify-end w-full mt-3" dir="rtl">
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-2xl">
              <div className="aegov-form-control w-full">
                <div className="form-control-input flex items-center h-12 gap-2">
                  <span className="control-prefix flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5 text-gray-500">
                      <rect width="256" height="256" fill="none" />
                      <circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                      <line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                    </svg>
                  </span>
                  <input
                    type="search"
                    placeholder="ابحث بالنوع او بالرقم"
                    className="w-full border border-gray-300 rounded px-2 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-200"
                    id="input"
                  />
                </div>
              </div>
              <button className="aegov-btn btn-outline w-full sm:w-auto mt-2 sm:mt-0">بحث</button>
            </div>
          </div>

          {/* Table */}
          <div className="w-full mt-4 overflow-x-auto">
            <CustomTable
              classRow="text-center"
              headers={["الإجراءات","الحالة","تاريخ التحديث","تاريخ الإصدار","نوع الملف","رقم الملف"]}
              rows={[
                {
                  cells: [
                    <img src={frame} alt="" className="mx-auto" />,
                    <span className="px-2 py-1 rounded bg-[#E4F4E7] text-[#2A5133]">متداولة</span>,
                    "2025-08-19",
                    "2025-08-01",
                    "ملف قضائي",
                    "D01/2014",
                  ],
                },
                {
                  cells: [
                    <img src={frame} alt="" className="mx-auto" />,
                    <span className="px-2 py-1 rounded bg-[#FDE4E3] text-[#95231F]">مفصولة</span>,
                    "2025-08-18",
                    "2025-07-28",
                    "ملف إداري",
                    "D02/2015",
                  ],
                },
                {
                  cells: [
                    <img src={frame} alt="" className="mx-auto" />,
                    <span className="px-2 py-1 rounded bg-[#D3EDFF] text-[#002DC2]">انتظار اجراءك</span>,
                    "2025-08-17",
                    "2025-07-25",
                    "ملف تجاري",
                    "D03/2016",
                  ],
                },
              ]}
              isArabic={true}
              classRowHeader="bg-white rounded-lg shadow-sm w-full text-sm sm:text-base"
            />
            <div className="mt-3 flex justify-end" dir="rtl">
              <button className="aegov-btn btn-outline w-full sm:w-auto" type="button">إلغاء</button>
            </div>
          </div>

          {/* Mobile Tabs */}
          <div className="lg:hidden w-full bg-white shadow-sm p-4 rounded mt-6 grid grid-cols-1 gap-3" dir="rtl">
            <SideTabs
              tabs={tabsData.map((tab, index) => ({
                title: (
                  <div
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center justify-between flex-row-reverse gap-2 px-3 py-2 rounded cursor-pointer transition-colors ${
                      activeTab === index
                        ? "bg-[#F2ECCF] text-[#5D3B26]"
                        : "text-gray-700 hover:bg-[#F2ECCF] hover:text-[#5D3B26]"
                    }`}
                  >
                    <span className="text-xs sm:text-sm md:text-base">{tab.title}</span>
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

        {/* Right / Sidebar */}
        <div className="hidden lg:block w-full bg-white shadow-sm p-4 flex-shrink-0" dir="rtl">
          <SideTabs
            tabs={tabsData.map((tab, index) => ({
              title: (
                <div
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center justify-between flex-row-reverse gap-2 px-3 py-2 rounded cursor-pointer transition-colors ${
                    activeTab === index
                      ? "bg-[#F2ECCF] text-[#5D3B26]"
                      : "text-gray-700 hover:bg-[#F2ECCF] hover:text-[#5D3B26]"
                  }`}
                >
                  <span className="text-xs sm:text-sm md:text-base">{tab.title}</span>
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

export default DisputeDetails_D01_2014;
