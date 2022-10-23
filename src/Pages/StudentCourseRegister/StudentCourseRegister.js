import React, { useEffect, useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const StudentCourseRegister = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { dept } = useAuth();

    const [semester, setSemester] = useState("");
    const [currentCourses, setCurrentCourses] = useState([]);
    // const [session, setSession] = useState();
    // const [regular, setRegular] = useState({});
    // const [backlog, setBacklog] = useState();

    console.log(dept);
    console.log(semester);


    if (currentCourses)
        console.log(currentCourses);

    useEffect(() => {
        if (semester !== '') {
            fetch(`http://localhost:5000/courses/${dept}_${semester}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setCurrentCourses(data);
                })
        }

    }, [semester])

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div>
            <h4 className='text-center py-3'>Student's Course Registration</h4>
            <div className='container-fluid shadow-lg w-75 my-5 py-2'>


                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                        <Form.Group className="mb-3">
                            <Form.Label className='text-danger'>Name: </Form.Label>

                            <input {...register("name", { required: true })} className="w-100" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-danger'>ID: </Form.Label>
                            <input {...register("id", { required: true })} className="w-100" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-danger'>Department: </Form.Label>
                            <input {...register("department", { required: true })} className="w-100" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-danger'>Semester Name:</Form.Label>
                            <br></br>
                            <Form.Select {...register("semester", { required: true })} onChange={(e) => {
                                setSemester(e.target.value);
                            }}>
                                <option>Select</option>
                                <option value="1">1st Year 1st Semester</option>
                                <option value="2">1st Year 2nd Semester</option>
                                <option value="3">2nd Year 1st Semester</option>
                                <option value="4">2nd Year 2nd Semester</option>
                                <option value="5">3rd Year 1st Semester</option>
                                <option value="6">3rd Year 2nd Semester</option>
                                <option value="7">4th Year 1st Semester</option>
                                <option value="8">4th Year 2nd Semester</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-danger'>Session:</Form.Label>
                            <br></br>
                            <Form.Select {...register("session", { required: true })}>
                                <option>Select</option>
                                <option value="16">2015-16</option>
                                <option value="17">2016-17</option>
                                <option value="18">2017-18</option>
                                <option value="19">2018-19</option>
                                <option value="20">2019-20</option>
                                <option value="21">2020-21</option>
                                <option value="22">2021-22</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-danger'>Hall: </Form.Label>
                            <br></br>
                            <Form.Select {...register("hall", { required: true })}>
                                <option>Select</option>
                                <option value="BSMRH">Bangabandhu Sheikh Mujibur Rahman Hall</option>
                                <option value="JAMH">Jananeta Abdul Mannan Hall</option>
                                <option value="SJRH">Shahid Jiaur Rahman Hall</option>
                                <option value="SRH">Sheikh Rasel Hall</option>
                                <option value="SJJIH">Shaheed Janani Jahanara Imam Hall, MBSTU</option>
                                <option value="AKBH">Alema Khatun Bhashani Hall</option>
                            </Form.Select>
                        </Form.Group>
                    </div>

                    <br />
                    <Form.Group className='mb-3'>
                        <Form.Label className='text-danger'>Regular Courses: </Form.Label>
                        <Table responsive striped bordered hover className='text-center'  >
                            <thead>
                                <tr>
                                    <th>Course Code</th>
                                    <th>Course Title</th>
                                    <th>Credit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CSE4201</td>
                                    <td>Computer Graphics</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>CSE4203</td>
                                    <td>Neural Network</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </Table>

                        <br />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label className='text-danger'>Backlog Courses: </Form.Label>
                        <Table responsive striped bordered hover className='text-center'>
                            <thead>
                                <tr>
                                    <th>Course Code</th>
                                    <th>Course Title</th>
                                    <th>Credit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CSE4101</td>
                                    <td>Artificial Intelligence</td>
                                    <td>3</td>
                                </tr>
                                <tr>

                                    <td>CSE4103</td>
                                    <td>VLSI Design</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Form.Group>

                    <div className='text-center'>
                        <input type="submit" value='Register' className='btn btn-primary' />
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default StudentCourseRegister;