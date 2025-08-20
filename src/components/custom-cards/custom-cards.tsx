// CustomStepper.tsx
import React, { FC, ReactNode } from "react";

export interface IStep {
  id: number;
  title: string;
  date: string;
  active?: boolean;
}

interface ICustomStepperProps {
  steps: IStep[];
  description?: string | ReactNode;
  className?: string; // for wrapper styling
}

export const CustomStepper: FC<ICustomStepperProps> = ({ steps, description, className }) => {
  return (
    <div className={className}>
      <nav
        aria-label="Progress"
        className="aegov-step inline-block text-right"
        dir="rtl"
      >
        <ol role="list" className="flex flex-col relative">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className={`relative flex items-center pb-10 ${
                step.active ? "step-current" : "step-upcoming"
              }`}
            >
              {index !== steps.length - 1 && (
                <div
                  className="step-connector-state step-connector-vertical absolute left-1/2 transform -translate-x-1/2 top-1/2 bottom-0 z-0"
                  aria-hidden="true"
                />
              )}

              <a
                href="#"
                className="step-badge relative z-10 flex-shrink-0"
                aria-current={step.active ? "step" : undefined}
              >
                {step.id}
                <span className="sr-only">{`Step ${step.id + 1}`}</span>
              </a>

              <div className="flex flex-col mr-4 -ml-6 -z-10">
                <p className="text-[#232528] text-[26px] font-medium">
                  {step.title}
                </p>
                <span className="text-[#5F646D] text-[20px]">{step.date}</span>
              </div>
            </li>
          ))}
        </ol>
      </nav>

      {description && (
        <p className="text-[#5F646D] text-[14px] font-normal mt-2">
          {description}
        </p>
      )}
    </div>
  );
};
