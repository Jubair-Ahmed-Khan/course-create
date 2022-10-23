import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { BsCheckCircleFill } from "react-icons/bs";

const AdmitCardStatus = () => {
    const [registration, setRegistration] = useState(false);
    const [payment, setPayment] = useState(false);
    const [chairmanApproval, setChairmanApproval] = useState(false);
    const [controllerApproval, setControllerApproval] = useState(false);
    const [registrarApproval, setRegistrarApproval] = useState(false);
    const [issueAdmit, setIssueAdmit] = useState(false);


    return (
        <div>
            <div className='container my-3'>
                <h4 className='text-center my-4'>Admit Card Status</h4>
                <div className='row row-cols-lg-5 row-cols-md-4 row-cols-sm-1'>
                    <Card className={registration ? 'me-3 mb-3 border border-success border-lg' : 'me-3 mb-3'}>
                        <Card.Body style={{ fontSize: "16px" }}>Course registration
                            {registration ?
                                <BsCheckCircleFill className='ms-5 text-success'></BsCheckCircleFill>
                                :
                                <BsCheckCircleFill className='ms-5 text-muted'></BsCheckCircleFill>
                            }

                        </Card.Body>

                    </Card>
                    <Card className={payment ? 'me-3 mb-3 ms-5 border border-success border-lg' : 'me-3 mb-3'}>
                        <Card.Body style={{ fontSize: "16px" }}>Make Payment
                            {payment ?
                                <BsCheckCircleFill className='ms-5 text-success'></BsCheckCircleFill>
                                :
                                <BsCheckCircleFill className='ms-5 text-muted'></BsCheckCircleFill>
                            }

                        </Card.Body>

                    </Card>
                    <Card className={chairmanApproval ? 'me-3 mb-3 ms-5 border border-success border-lg' : 'me-3 mb-3'}>
                        <Card.Body style={{ fontSize: "16px" }}>Chairman Approval
                            {chairmanApproval ?
                                <BsCheckCircleFill className='ms-5 text-success'></BsCheckCircleFill>
                                :
                                <BsCheckCircleFill className='ms-5 text-muted'></BsCheckCircleFill>
                            }

                        </Card.Body>

                    </Card>
                    <Card className={controllerApproval ? 'me-3 mb-3 ms-5 border border-success border-lg' : 'me-3 mb-3'}>
                        <Card.Body style={{ fontSize: "16px" }}>Controller Approval
                            {controllerApproval ?
                                <BsCheckCircleFill className='ms-5 text-success'></BsCheckCircleFill>
                                :
                                <BsCheckCircleFill className='ms-5 text-muted'></BsCheckCircleFill>
                            }

                        </Card.Body>

                    </Card>
                    <Card className={registrarApproval ? 'me-3 mb-3 ms-5 border border-success border-lg' : 'me-3  mb-3'}>
                        <Card.Body style={{ fontSize: "16px" }}>Registrar Approval
                            {registrarApproval ?
                                <BsCheckCircleFill className='ms-5 text-success'></BsCheckCircleFill>
                                :
                                <BsCheckCircleFill className='ms-5 text-muted'></BsCheckCircleFill>
                            }

                        </Card.Body>

                    </Card>
                    <Card className={issueAdmit ? 'me-3 mb-3 ms-5 border border-success border-lg' : 'me-3  mb-3'}>
                        <Card.Body style={{ fontSize: "16px" }}>Admit Card Issue
                            {issueAdmit ?
                                <BsCheckCircleFill className='ms-5 text-success'></BsCheckCircleFill>
                                :
                                <BsCheckCircleFill className='ms-5 text-muted'></BsCheckCircleFill>
                            }

                        </Card.Body>

                    </Card>
                </div>

            </div>
        </div>
    );
};

export default AdmitCardStatus;