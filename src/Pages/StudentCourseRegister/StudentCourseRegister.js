import React, { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const StudentCourseRegister = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [semester, setSemester] = useState();
    const [session, setSession] = useState();
    const [regular, setRegular] = useState({});
    const [backlog, setBacklog] = useState();

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div>
            <h4 className='text-center py-3'>Student's Course Registration</h4>
            <div className='container-fluid shadow-lg w-75 my-5 py-2'>


                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3">
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
                            <Form.Select {...register("semester", { required: true })} onChange={(e) => setSemester(e.target.value)}>
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
                            <Form.Select {...register("session", { required: true })} onChange={(e) => setSession(e.target.value)}>
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
                        <input type="submit" value='Assign' />
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default StudentCourseRegister;