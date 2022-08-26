import React from 'react';
import { Form, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const AssignMarks = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div>
            <h4 className='text-center py-3'>Assign Marks</h4>
            <div className='container-fluid shadow-lg w-75 my-5 py-2'>


                <Form onSubmit={handleSubmit(onSubmit)}>



                    <Form.Group className='mb-3'>
                        {/* <Form.Label className='text-danger'>Regular Courses: </Form.Label> */}
                        <Table responsive striped bordered hover className='text-center'  >
                            <thead>
                                <tr>
                                    <th>Student_id</th>
                                    <th>Student_name</th>
                                    <th>Assign_Mark</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input {...register("Student_id", { required: true })} />
                                    </td>
                                    <td>
                                        <input {...register("Student_name", { required: true })} />
                                    </td>
                                    <td>
                                        <input {...register("Assign_mark", { required: true })} />
                                    </td>
                                </tr>
                                {/* <tr>
                                        <td>CSE4203</td>
                                        <td>Neural Network</td>
                                        <td>3</td>
                                    </tr> */}
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

export default AssignMarks;