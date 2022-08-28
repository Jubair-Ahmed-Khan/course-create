import React from 'react';

const StudentInfo = () => {
    const studentImage = "https://i.ibb.co/6HBxzwW/student.png";
    return (
        <div className='d-flex shadow-lg p-3 mb-3'>
            <img src={studentImage} style={{ borderRadius: "50%" }} className="img-fluid" alt="student" />

            <div className='ms-5'>
                <h4 className='mb-3'>Jubair Ahmed Khan (CE17050)</h4>
                <h6 className='fw-light'>Student</h6>
                <h6 className='fw-light mb-2'>4th Year 2nd Semester</h6>
                <h6 className='fw-light mb-4'>session: 2016-17</h6>
                <h6 className='fw-lighter'> <i className='fa fa-envelope text-secondary me-2' /> ce17050@mbstu.ac.bd</h6>
                <h6 className='fw-lighter'> <i className="fa fa-phone text-secondary me-2"></i>  01601-293123</h6>
                <h6 className='fw-lighter'> <i className="fa fa-location-arrow text-secondary me-2"></i>  Thanapara, Tangail</h6>
            </div>
        </div>
    );
};

export default StudentInfo;
