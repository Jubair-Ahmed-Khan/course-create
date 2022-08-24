import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const EmailForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const dept = 'cse';
    // useEffect(() => {
    //     fetch("http://localhost:5000/teachers/${dept}")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setTeachers(data);
    //         })
    // }, [])
    const onSubmit = data => {
        console.log(data);
    };
    // const filteredCourses = courses.filter(course => course.key === semester);



    return (
        <div className='container-fluid shadow-lg w-25 my-5 py-2'>

            <h4 className='text-center'>Assign Role</h4>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3 w-100 mx-auto">
                    <Form.Label className='text-danger'>Email:</Form.Label>
                    <br></br>
                    <input {...register("semester", { required: true })} className="w-100" />
                </Form.Group>
                <Form.Group className="mb-3 w-100 mx-auto">
                    <Form.Label className='text-danger'>Role:</Form.Label>
                    <br></br>
                    <Form.Select {...register("session", { required: true })}>
                        <option value="Teacher">Teacher</option>
                        <option value="Registrar">Registrar</option>
                    </Form.Select>
                </Form.Group>
                {/* <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Course Teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Computer Graphics</td>
                            <td>
                                <Form.Select {...register("teacher", { required: true })}>
                                    {
                                        teachers.map(x => <option key={x?.name} value={x.name}>{x?.name}</option>)
                                    }

                                </Form.Select>
                            </td>
                        </tr>
                    </tbody>
                </Table> */}


                <div className='text-center'>
                    <input type="submit" value='Assign' />
                </div>
            </Form>


        </div>
    );
};

export default EmailForm;