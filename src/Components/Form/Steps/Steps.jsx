import {ReactNode, useState} from 'react';

const Steps = ({children, steps}) => {
    const [currentStep, setCurrentStep] = useState(0);
    return(
    <div>
        {children}
        {steps[currentStep]}
        <button onClick={(e) => {e.preventDefault();setCurrentStep(currentStep + 1)}}>Next</button>
        <button onClick={(e) =>  {e.preventDefault();setCurrentStep(currentStep - 1)}}>Previous</button>
    </div>)
}

export default Steps;