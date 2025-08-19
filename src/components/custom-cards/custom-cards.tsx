import React, { FC, ReactNode } from 'react';

interface ICustomCardProps {
  children: ReactNode;
  className?: string;
}

interface IProgressStep {
  id: number;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  description?: string;
}

interface IProgressStepsProps {
  steps: IProgressStep[];
  className?: string;
}

export const ProgressSteps: FC<IProgressStepsProps> = ({ steps, className }) => {
  return (
    <nav aria-label="Progress" className={`aegov-step ${className || ''}`}>
      <ol className="space-y-8">
        {steps.map((step, index) => (
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
  );
};

export const CustomCard: FC<ICustomCardProps> = ({ children, className }) => {
  return (
    <div className={`p-6 rounded-xl shadow-lg border border-yellow-200 bg-white ${className || ''}`}>
      {children}
    </div>
  );
};