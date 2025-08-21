
import { CustomStepper } from "../custom-cards/custom-cards";

interface IStep {
  id: number;
  title: string;
  date: string;
  active?: boolean;
}

const DisputeSessions_D01_2014 = () => {


  const steps: IStep[] = [
    { id: 1, title: "في انتظار اجراءك", date: "12/8/2023", active: true },
    { id: 2, title: "في انتظار اجراءك", date: "12/8/2023" },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50" style={{ width: "1200px" }} id="main">


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


        </div>


      </div>
    </div>
  );
};

export default DisputeSessions_D01_2014;
