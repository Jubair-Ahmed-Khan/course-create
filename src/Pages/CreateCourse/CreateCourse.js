import React from 'react';
import Form from 'react-bootstrap/form';
import { useForm } from 'react-hook-form';

const CreateCourse = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div>

            <div className='container-fluid shadow-lg w-75 my-5 py-2'>

                <h4 className='text-center text-bolder py-4'>Create Course</h4>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row row-cols-lg-1 row-cols-md-1 row-cols-sm-1">
                        <Form.Group className="mb-2">
                            <Form.Label className='text-danger'>Course Code: </Form.Label>

                            <input type="text" {...register("course_code", { required: true })} className="w-100" />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className='text-danger'>Course Title: </Form.Label>
                            <input type="text" {...register("course_title", { required: true })} className="w-100" />
                        </Form.Group>
                        {/* <Form.Group className="mb-3">
                            <Form.Label className='text-danger'>Department: </Form.Label>
                            <input {...register("department", { required: true })} className="w-100" />
                        </Form.Group> */}
                        <Form.Group className="mb-2">
                            <Form.Label className='text-danger'>Department:</Form.Label>
                            <br></br>
                            <Form.Select {...register("department", { required: true })}>
                                <option>Select</option>
                                <option value="cse">Computer Science and Engineering</option>
                                <option value="ict">Information and Communication Technology</option>
                                <option value="te">Textile Engineering</option>
                                <option value="me">Mechanical Engineering</option>
                                <option value="esrm">Environmental Science and Resource Management</option>
                                <option value="cps">Criminology and Police Science</option>
                                <option value="ftns">Food Technology and Nutritional Science</option>
                                <option value="bge">Biotechnology and Genetic Engineering</option>
                                <option value="bmb">Biochemistry and Molecular Biology</option>
                                <option value="6">Pharmacy</option>
                                <option value="chem">Chemistry</option>
                                <option value="math">Mathematics</option>
                                <option value="phy">Physics</option>
                                <option value="stat">Statistics</option>
                                <option value="bba">Business  Administration</option>
                                <option value="acc">Accounting</option>
                                <option value="mng">Management</option>
                                <option value="eco">Economics</option>
                                <option value="eng">English</option>

                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className='text-danger'>Credit: </Form.Label>
                            <input type="number" {...register("credit", { required: true })} className="w-100" />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className='text-danger'>Semester Name:</Form.Label>
                            <br></br>
                            <Form.Select {...register("semester", { required: true })}>
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
                        <Form.Group className="mb-2">
                            <Form.Label className='text-danger'>Course Type:</Form.Label>
                            <br></br>
                            <Form.Select {...register("type", { required: true })}>
                                <option>Select</option>
                                <option value="theory">Theory</option>
                                <option value="lab">Lab</option>
                                <option value="project">Textile Engineering</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className='text-danger'>Category:</Form.Label>
                            <br></br>
                            <Form.Select {...register("category", { required: true })}>
                                <option>Select</option>
                                <option value="compulsory">Compulsory</option>
                                <option value="optional">Optional</option>

                            </Form.Select>
                        </Form.Group>
                    </div>

                    <br />

                    <div className='text-center'>
                        <input type="submit" value='Create' className='btn btn-primary' />
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default CreateCourse;