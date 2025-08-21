import { SideTabs } from "../custom-side-tabs/custom-side-tabs";
import { CustomBanner } from "../custom-banner/custom-banner";
import vector from "../../assets/images/Vector.svg";
import files from "../../assets/images/Files.svg";
import clock from "../../assets/images/ClockCounterClockwise.png";
import DisputeDocuments_D01_2014 from "./DisputeDocuments_D01_2014";
import DisputeSessions_D01_2014 from "./DisputeSessions_D01_2014";
import { useState } from "react";
import DisputeDetails_D01_2014 from "./DisputeDetails_D01_2014";
const mine = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabsData = [
        { title: "معلومات الملف", icon: vector, component: <DisputeDetails_D01_2014 /> },
        { title: "الملفات القضائية", icon: files, component: <DisputeDocuments_D01_2014 /> },
        { title: "سجل الملف", icon: clock, component: <DisputeSessions_D01_2014 /> },
    ];
    return (
        <div className="flex flex-col gap-5" dir="rtl">
            {/* Banner */}
            <div className="w-full mt-4 px-4 md:px-8" >
                <CustomBanner
                    title="ملف منازعة D01/2014"
                    isArabic={true}
                    className="bg-gradient-to-r from-yellow-100 to-yellow-200 shadow-md rounded-lg p-4 text-center w-full text-lg sm:text-xl md:text-2xl font-bold"
                />

            </div>
            <SideTabs
                tabs={tabsData.map((tab, index) => ({
                    title: (
                        <div
                            onClick={() => setActiveTab(index)}
                            className={`flex items-center justify-between flex-row-reverse gap-2 px-3 py-2 rounded cursor-pointer transition-colors ${activeTab === index
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
    )
}

export default mine