import { CustomCard } from "../custom-card/custom-card"
const DisputeDocuments_D01_2014 = () => {

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 " style={{ width: "1200px" }} id="main">


      {/* Main content */}
      <div className="flex flex-col lg:flex-row min-w-full mt-6 px-4 md:px-8 gap-6">
        <div className="flex-1 flex flex-col gap-6">
          <div className="w-full mt-4">
            <CustomCard
              children={
                <div className="flex flex-col gap-4">
                  <h1
                    className="text-xl font-bold text-right"
                    style={{ fontSize: "32px", marginBottom: "10px" }}
                  >
                    معلومات ملف المنازعة
                  </h1>

                  <div className="flex flex-col sm:flex-row justify-between gap-6 border-b" style={{ borderColor: "#E1E3E5", paddingBottom: "12px" }}>

                    <div className="flex flex-col">
                      <span className="text-gray-600">رقم الملف</span>
                      <p
                        className="font-semibold"
                        style={{ color: "#5D3B26", fontSize: "16px" }}
                      >
                        D01/2014
                      </p>
                    </div>
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



                  </div>

                  <div className="flex flex-col sm:flex-row justify-between gap-6 pt-2" dir="rtl">
                    {/* تاريخ التحديث */}
                    <div className="flex flex-col ">
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



        </div>


      </div>
    </div>
  )
}

export default DisputeDocuments_D01_2014