import { CustomBanner } from "../custom-banner/custom-banner";
import { SideTabs } from "../custom-side-tabs/custom-side-tabs";
import { CustomTable } from "../custom-table/custom-table";
import { useState } from "react";
import vector from "../../assets/images/Vector.svg";
import files from "../../assets/images/Files.svg";
import clock from "../../assets/images/ClockCounterClockwise.png";
import { CustomCard } from "../custom-cards/custom-cards";

const DisputeSessions_D01_2014 = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabsData = [
        { title: "معلومات الملف", icon: vector, component: <img src={vector} alt="" className="w-full rounded" /> },
        { title: "الملفات القضائية", icon: files, component: <img src={files} alt="" className="w-full rounded" /> },
        { title: "سجل الملف", icon: clock, component: <img src={clock} alt="" className="w-full rounded" /> },
    ];

    // Progress steps data
    const stepsData = [
        { id: 1, title: "الخطوة الأولى", status: "completed", description: "تم الاكتمال" },
        { id: 2, title: "الخطوة الثانية", status: "current", description: "قيد التنفيذ" },
        { id: 3, title: "الخطوة الثالثة", status: "upcoming", description: "لم تبدأ بعد" },
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
                      <CustomCard>
                        {/* File information section */}
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-gray-800 mb-4">سجل الملف</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                    <h3 className="font-semibold text-blue-800 mb-1">عدد المراجعة</h3>
                                    <p className="text-gray-700">1/3/2023</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                    <h3 className="font-semibold text-green-800 mb-1">هي النظام لزيادة</h3>
                                    <p className="text-gray-700">1/3/2023</p>
                                </div>
                                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                                    <h3 className="font-semibold text-amber-800 mb-1">السياحة</h3>
                                    <p className="text-gray-700">1/3/2023</p>
                                </div>
                            </div>
                        </div>

                        {/* Progress steps section */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-center text-gray-800 mb-6">حالة التقدم</h2>
                            <nav aria-label="Progress" className="aegov-step">
                                <ol className="space-y-8">
                                    {stepsData.map((step, index) => (
                                        <li key={step.id} className={`relative ${step.status === 'completed' || step.status === 'current' ? 'pb-10' : ''}`}>
                                            {(step.status === 'completed' || step.status === 'current') && (
                                                <div className="step-connector-vertical absolute top-10 right-5 w-0.5 h-10 bg-green-500" aria-hidden="true"></div>
                                            )}
                                            
                                            <div className="flex items-start">
                                                <div className={`step-badge flex items-center justify-center w-10 h-10 rounded-full border-2 
                                                    ${step.status === 'completed' ? 'bg-green-500 border-green-500 text-white' : 
                                                    step.status === 'current' ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 
                                                    'bg-white border-gray-300 text-gray-400'}`}>
                                                    {step.status === 'completed' ? (
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    ) : (
                                                        step.id
                                                    )}
                                                </div>
                                                
                                                <div className="mr-4">
                                                    <span className={`text-sm font-medium ${step.status === 'completed' ? 'text-green-600' : 
                                                        step.status === 'current' ? 'text-blue-600' : 'text-gray-500'}`}>
                                                        {step.title}
                                                    </span>
                                                    {step.description && (
                                                        <p className="text-sm text-gray-500 mt-1">{step.description}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        </div>

                        {/* Additional information sections */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h3 className="font-bold text-yellow-700 mb-3 border-b border-yellow-200 pb-2">المحفوظات والدعم</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-blue-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                        </svg>
                                        <span>إعمالية التمويل</span>
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-blue-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h4.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                                        </svg>
                                        <span>Lexus 4.0-5.0</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-yellow-700 mb-3 border-b border-yellow-200 pb-2">الجميع</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-green-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        <span>المراجع</span>
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-green-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3z" />
                                        </svg>
                                        <span>خدمات موظفي الزوازة</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Help section */}
                        <div className="mt-8 p-6 bg-rose-50 rounded-xl border border-rose-200">
                            <h3 className="font-bold text-rose-800 mb-3">مساعدة</h3>
                            <p>You need a Full seat to edit Figma Design files.</p>
                            <a href="#" className="inline-block mt-3 px-4 py-2 bg-rose-100 text-rose-700 rounded-lg hover:bg-rose-200 transition">Download Full seats</a>
                        </div>
                      </CustomCard>
                    
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

export default DisputeSessions_D01_2014;