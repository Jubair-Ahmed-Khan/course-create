import React from 'react';
import { Accordion } from 'react-bootstrap';
import { MdPendingActions, MdCancel } from "react-icons/md";
import { FcApproval } from "react-icons/fc";

const ApplyToSupervisor = (props) => {
    const { subject, email, members, status, description } = props.details;
    let icon;

    const [name] = members;
    console.log(name);
    // console.log(props);

    return (
        <div>
            <div className='shadow-lg p-3 mb-3'>
                <h6 className='mb-2'>Subject: <span className='fw-light'>{subject}</span></h6>
                <h6 className='mb-2'>Teacher: <span className='fw-light'>{email}</span></h6>
                <h6 className='mb-2'>Group Members: </h6>
                {
                    members?.map(x => <li className='ms-5'>{x}</li>)
                }
                <h6 className='mb-3'>Status:
                    <span className='fw-light ms-1'>{status}
                        {status === "Rejected" && <MdCancel className='text-danger ms-1'></MdCancel>}
                        {status === "Pending" && <MdPendingActions className='text-warning ms-1'></MdPendingActions>}
                        {status === "Approved" && <FcApproval className='text-success ms-1'></FcApproval>}

                    </span>
                </h6>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Project Description</Accordion.Header>
                        <Accordion.Body>
                            {description}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className='mt-3'>
                    <button className='btn btn-primary'>Apply</button>
                </div>


            </div>
        </div>
    );
};

export default ApplyToSupervisor;