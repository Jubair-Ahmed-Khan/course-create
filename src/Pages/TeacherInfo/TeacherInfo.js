import React from 'react';

const TeacherInfo = () => {
    const teacherImage = "https://i.ibb.co/ScpX2fD/teacher.png";
    return (
        <div className='d-flex shadow-lg p-3 mb-3'>
            <img src={teacherImage} style={{ borderRadius: "50%" }} className="img-fluid" alt="teacher" />

            <div className='ms-5'>
                <h4 className='mb-3'>Dr. Mohammad Motiur Rahman</h4>
                <h6 className='fw-light mb-4'>Professor</h6>

                <h6 className='fw-lighter'> <i className='fa fa-envelope text-secondary me-2' /> mm73rahman@gmail.com</h6>
                <h6 className='fw-lighter'> <i className="fa fa-phone text-secondary me-2"></i>  01711-362344</h6>
                <h6 className='fw-lighter'> <i className="fa fa-location-arrow text-secondary me-2"></i>  Thanapara, Tangail</h6>

                <h5 className='mt-4 text-danger'>Field of interest:</h5>
                <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1'>
                    <div>
                        <i className="fa fa-circle-notch me-2"></i>
                        Machine Learning
                    </div>
                    <div>
                        <i className="fa fa-circle-notch me-2"></i>
                        Image Processing
                    </div>
                    <div>
                        <i className="fa fa-circle-notch me-2"></i>
                        Deep Learning
                    </div>
                    <div>
                        <i className="fa fa-circle-notch me-2"></i>
                        IoT
                    </div>
                    <div>
                        <i className="fa fa-circle-notch me-2"></i>
                        Data Mining
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeacherInfo;