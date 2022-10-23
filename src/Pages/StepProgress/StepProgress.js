import React, { useState } from 'react';
import Stepper from 'react-stepper-js'
import 'react-stepper-js/dist/index.css'

const StepProgress = () => {

    const [registration, setRegistration] = useState(false);
    const [payment, setPayment] = useState(false);
    const [chairmanApproval, setChairmanApproval] = useState(false);
    const [hallProvostApproval, setHallProvostApproval] = useState(false);
    const [controllerApproval, setControllerApproval] = useState(false);
    const [admitIssue, setAdmitIssue] = useState(false);
    const [currentStep, setCurrentStep] = useState(2);

    const steps = [{ label: "Course Registration", activeColor: "452c3d" }, { label: "Make Payment" }, { label: "Chairman Approval" }, { label: "Hall Provost Approval" }, { label: "Controller Approval" }, { label: "Admit Issue" },]



    return (
        <div className='container my-5'>

            <h4 className='text-center mb-5'>Admit Card Status</h4>

            <Stepper
                color="#23b561"
                fontSize="16px"
                fontColor="black"
                steps={steps}
                currentStep={currentStep}
            />
        </div>
    );
};

export default StepProgress;



// import React, { useState } from "react";
// import { Step, Stepper } from 'react-form-stepper';

// const StepProgress = () => {

//     const [registration, setRegistration] = useState(true);
//     const [payment, setPayment] = useState(false);
//     const [chairmanApproval, setChairmanApproval] = useState(false);
//     const [hallProvostApproval, setHallProvostApproval] = useState(false);
//     const [controllerApproval, setControllerApproval] = useState(false);
//     const [admitIssue, setAdmitIssue] = useState(false);
//     let stepCount = -1;


//     if (registration) stepCount++;

//     return (
//         <div className="my-5">
//             <h4 className="text-center mb-4">Admit Card Status</h4>
//             <Stepper activeStep={stepCount}>
//                 <Step label="Course Registration" />
//                 <Step label="Make Payment" />
//                 <Step label="Chairman Approval" />
//                 <Step label="Hall Provost Approval" />
//                 <Step label="Controller Approval" />
//                 <Step label="Admit Issue" />
//                 {/* <Step label="Chairman Approval" /> */}
//             </Stepper>
//         </div>
//     );
// };

// export default StepProgress;