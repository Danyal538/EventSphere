import React, { useState } from 'react'

const StepTracker = () => {
    const steps = ["Edit", "Banner", "Ticketing", "Review"];
    const [currentStep, setCurrentStep] = useState("Ticketing");
    return (
        <div>
            {steps.map((step, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`px-6 py-2 rounded-full text-sm transition font-medium ${currentStep === index
                        ? "bg-blue-600 text-white shadow-md"
                        : "border border-gray-300 text-gray-600 hover:bg-gray-100"}`}>
                    {step}
                </button>
            ))}
        </div>
    )
}

export default StepTracker