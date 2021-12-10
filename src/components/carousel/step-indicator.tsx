import React from 'react';

interface StepIndicatorProps {
    childrenLength: number
    currentIndex: number
}

export default function StepIndicator({childrenLength, currentIndex}: StepIndicatorProps) {
    return (
        <div className="stepIndicator">
            {Array.from(Array(childrenLength)).map((child, index) => (
                    <div key={index}
                         className={`step ${index === currentIndex ? 'step--active' : ''} `}/>
                )
            )}
        </div>
    )
}
