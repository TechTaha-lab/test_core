import { CustomBanner } from "../custom-banner/custom-banner";
import { SideTabs } from "../custom-side-tabs/custom-side-tabs";
import { useState } from "react";
import vector from "../../assets/images/Vector.svg";
import files from "../../assets/images/Files.svg";
import clock from "../../assets/images/ClockCounterClockwise.png";
import './d1.css';
import { CustomTag } from "../custom-tag/custom-tag";
import { ViewSvgIcon } from "../icons/icons";

import { CustomTable } from "../custom-table/custom-table";
import DisputeDocuments_D01_2014 from "./DisputeDocuments_D01_2014";
import DisputeSessions_D01_2014 from "./DisputeSessions_D01_2014";
import type { TableCell } from "../custom-table/custom-table";
const DisputeDetails_D01_2014 = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (keyword: string) => {
    setSearchValue(keyword);
  };
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    { title: "معلومات الملف", icon: vector},
    { title: "الملفات القضائية", icon: files, component: <DisputeDocuments_D01_2014 /> },
    { title: "سجل الملف", icon: clock, component: <DisputeSessions_D01_2014 /> },
  ];
  const disputeRows: TableCell[] = [
    {
      cells: ["2022/45678", "ملف توجيه اسري", "15/03/2022", "15/03/2022", <CustomTag color="text-aegreen-800" bg="bg-aegreen-100" className='w-[111px] h-[32px] flex justify-center items-center font-semibold' text="متداولة" />, <ViewSvgIcon />]
    },
    {
      cells: ["2023/11235", "ملف وساطة وتوثيق", "05/09/2023", "05/09/2023", <CustomTag color="text-aered-800" bg="bg-aered-100" className='w-[111px] h-[32px] flex justify-center items-center font-semibold' text="مفصولة" />, <ViewSvgIcon />]
    },
    {
      cells: ["2021/77899", "ملف دعوى", "28/11/2021", "28/11/2021", <CustomTag color="text-techblue-800" bg="bg-techblue-100" className='w-[111px] h-[32px] flex justify-center items-center font-semibold' text="في انتظار اجراءك" />, <ViewSvgIcon />]
    },
    {
      cells: ["2021/77899", "أمر على عريضة", "28/11/2021", "28/11/2021", <CustomTag color="text-aegreen-800" bg="bg-aegreen-100" className='w-[111px] h-[32px] flex justify-center items-center font-semibold' text="متداولة" />, <ViewSvgIcon />]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 max-w-[100%] mx-auto" id="main">


      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_16rem] gap-12 mt-6 px-4 md:px-8">

        <div className="flex flex-col gap-6">



          <div className="w-full mt-4 overflow-x-auto" dir="rtl">
            <CustomTable
              headers={["رقم الملف", "نوع الملف", "تاريخ الإصدار", "تاريخ التحديث", "الحالة", "الإجراءات"]}
              rows={disputeRows}
              loading={false}
              withHeaders={true}
              title="الملفات القضائية (القيود)"
              buttonActionText="إضافة قيد"
              buttonAction={() => console.log("Add row")}
              handleSearch={(keyword) => handleSearchChange(keyword)}
              isArabic={true}
              searchPlaceholder="ابحث بالرقم او بالإسم"
              searchLabel="بحث"
            />
            <div className="mt-3 flex justify-end" dir="rtl">
              <button className="aegov-btn btn-outline w-full sm:w-auto" type="button">إلغاء</button>
            </div>
          </div>

       
        </div>

      
      </div>
    </div>
  );
};

export default DisputeDetails_D01_2014;
