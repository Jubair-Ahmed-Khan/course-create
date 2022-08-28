import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const UserInfo = () => {

    let field = [];

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });

    const onSubmit = data => {
        data['field'] = field;
        console.log(data);
        field = [];
        reset();
    }

    const handleCheck = (e) => {
        const val = e.target.name;


        if (field.includes(val) === false) {
            field.push(val);

        }

        //console.log(val);
    }

    return (
        <div>

            <div className='container-fluid shadow-lg w-50 my-5 py-2'>
                <h4 className='text-center py-3'>Update Info: </h4>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row row-cols-lg-1 row-cols-md-1 row-cols-sm-1">
                        <Form.Group className="mb-3">
                            <Form.Label className='text-danger'>Name: </Form.Label>

                            <input {...register("name", { required: true })} className="w-100" defaultValue="Jubair" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-danger'>Email: </Form.Label>
                            <input {...register("email", { required: true })} className="w-100" defaultValue="ce17050@mbstu.ac.bd" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-danger'>Designation: </Form.Label>
                            <input {...register("designation", { required: true })} className="w-100" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-danger'>Phone No:</Form.Label>
                            <input {...register("phone", { required: true })} className="w-100" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-danger'>Address:</Form.Label>
                            <input {...register("address", { required: true })} className="w-100" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-danger'>Current Semester:</Form.Label>
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
                        <Form.Group className="mb-3">
                            <Form.Label className='text-danger'>Session:</Form.Label>

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
                            <Form.Label className='text-danger'>Field of Interest:</Form.Label>
                            <br></br>
                            <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1'>
                                <div>
                                    <input
                                        name="Machine Learning"
                                        type="checkbox"
                                        value="Machine Learning"
                                        onChange={handleCheck}

                                    /> Machine Learning
                                </div>

                                {/* <br></br> */}
                                <div>
                                    <input
                                        name="Artificial Intelligence"
                                        type="checkbox"
                                        value="Artificial Intelligence"
                                        onChange={handleCheck}

                                    /> Artificial Intelligence
                                </div>
                                {/* <br></br> */}
                                <div>
                                    <input
                                        name="Image Processing"
                                        type="checkbox"
                                        value="Image Processing"
                                        onChange={handleCheck}

                                    /> Image Processing
                                </div>

                                <div>
                                    <input
                                        name="IoT"
                                        type="checkbox"
                                        value="IoT"
                                        onChange={handleCheck}

                                    /> IoT
                                </div>
                                <div>
                                    <input
                                        name="Natural Language Processing"
                                        type="checkbox"
                                        value="Natural Language Processing"
                                        onChange={handleCheck}
                                    /> Natural Language Processing
                                </div>
                                <div>
                                    <input
                                        name="VLSI Design"
                                        type="checkbox"
                                        value="VLSI Design"
                                        onChange={handleCheck}
                                    /> VLSI Design
                                </div>
                                <div>
                                    <input
                                        name="Data Mining"
                                        type="checkbox"
                                        value="Data Mining"
                                        onChange={handleCheck}
                                    /> Data Mining
                                </div>
                                <div>
                                    <input
                                        name="Deep Learning"
                                        type="checkbox"
                                        value="Deep Learning"
                                        onChange={handleCheck}
                                    /> Deep Learning
                                </div>
                                <div>
                                    <input
                                        name="Bioinformatics"
                                        type="checkbox"
                                        value="Bioinformatics"
                                        onChange={handleCheck}
                                    /> Bioinformatics
                                </div>
                            </div>
                        </Form.Group>

                    </div>
                    <div className='text-center mt-3'>
                        <input className="btn btn-primary" type="submit" value='Submit' />
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default UserInfo;