import React from 'react';
import { Form } from 'react-bootstrap';
import './AdmitCard.css';

// import checkSemesterName from '../../../Functions/SemesterCodeToSemesterName';
// import useAuth from '../../../Hooks/useAuth';

const AdmitCard = () => {

    const regularCourses = ['CSE4101', 'CSE4102', 'CSE4103', 'CSE4104', 'CSE4105', 'CSE4106', 'CSE4107', 'CSE4108', 'CSE4113', 'CSE4115', 'CSE4116'];
    const backlogCourses = ['CSE2101', 'CSE2102', 'CSE2108'];
    const specialCourses = ['CSE1201'];

    const logo = "https://i.ibb.co/c3Z2P9V/MBSTU-Logo.png";
    const studentPhoto = "https://i.ibb.co/QJn9RVQ/student.png";
    return (
        <div>

            <div className="container">
                <div className="admit-position py-2">
                    <div className="img-pos">
                        <img src={logo} style={{ width: "100px" }} className="img-fluid pb-2" alt="mbstu_logo" />
                    </div>

                    <div className="img-pos pt-3 text-center ms-1 w-75">
                        <h2 className="fw-bolder">Mawlana Bhashani Science and Technology University</h2>
                        <p>Santosh, Tangail</p>
                        <h4 className='fw-bold'>Admit Card</h4>
                    </div>

                    <div className="img-pos mt-3">
                        <img src={studentPhoto} style={{ width: "150px" }} className="img-fluid pb-2" alt="student_pic" />
                    </div>

                </div>

            </div>

            <div className="container">
                <div className="">

                    <h6 className='text-center'>4th Year 1st Semester B.Sc(Engg./Hons.)/BSS(Hons.)/BBA/B.Pharm. Final Examination, 2022</h6>

                </div>

            </div>
            <div className="container">
                <div className="">

                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Student ID: </Form.Label>
                        <span className="w-75 ms-2">CE17051</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Session: </Form.Label>
                        <span className="w-75 ms-2">2016-17</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Name of the Applicant: </Form.Label>
                        <span className="w-75 ms-2">TAnvir Ahmed</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Name of the Department: </Form.Label>
                        <span className="w-75 ms-2">Computer Science and Engineering</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Father's Name: </Form.Label>
                        <span className="w-75 ms-2">MD. MOnirul Hoq</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Starting Date of Examination: </Form.Label>
                        <span className="w-75 ms-2">28 JUN, 2022</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Name of Hall: </Form.Label>
                        <span className="w-75 ms-2">JAMH</span>
                    </Form.Group>
                </div>
            </div>

            <div className='container my-2'>
                <Form.Label className='fw-bold'>Regular Course Code: </Form.Label>
                <ol class="horizontal">
                    {
                        regularCourses?.map(course => <li>{course}</li>)
                    }
                </ol>
            </div>
            <br />
            <div className='container my-4'>
                <Form.Label className='fw-bold'>Backlog/Improvement Course Code: </Form.Label>
                <ol class="horizontal">
                    {
                        backlogCourses?.map(course => <li>{course}</li>)
                    }
                </ol>
            </div>
            <br />
            <div className='container'>
                <Form.Label className='fw-bold'>Special Course Code: </Form.Label>
                <ol class="horizontal">
                    {
                        specialCourses?.map(course => <li>{course}</li>)
                    }
                </ol>
            </div>

            <div className="container my-3">
                <div className='w-25 float-end'>
                    <hr style={{ height: "3px", color: "black", bordr: "none" }} />
                    <p className='text-center'>Controller of Examinations</p>
                </div>
            </div>

        </div>
    );
};

export default AdmitCard;