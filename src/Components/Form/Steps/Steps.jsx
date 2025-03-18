import {ReactNode, useState} from 'react';
import { Button } from '@mui/material';
import { ArrowRight, ArrowLeft } from '../../SVG/Arrow';
import './Steps.scss'

const Steps = ({submit, steps}) => {
    const [currentStep, setCurrentStep] = useState(0);
    
    return(
    <div className='form-container'>
        <div className='form-container__steps'>
            {steps[currentStep]}
        </div>
        <div className='step-button'>
            {currentStep > 0 &&
            <Button onClick={(e) =>  {e.preventDefault();setCurrentStep(currentStep - 1)}}><ArrowLeft/></Button>
            }
            {currentStep < steps.length-1 &&
            <Button onClick={(e) => {e.preventDefault();setCurrentStep(currentStep + 1)}}><ArrowRight/></Button>
            }
            {currentStep == steps.length-1 &&
            <Button type='submit' onClick={submit}>Generate Itenerary</Button>
            }
        </div>
    </div>)
}

export default Steps;