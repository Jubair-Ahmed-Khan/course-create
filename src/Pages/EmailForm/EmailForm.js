import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const EmailForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className='container-fluid shadow-lg w-25 my-5 py-2'>
            <h4 className='text-center'>Assign Role</h4>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3 w-100 mx-auto">
                    <Form.Label className='text-danger'>Email:</Form.Label>
                    <br></br>
                    <input {...register("email", { required: true })} className="w-100" />
                </Form.Group>
                <Form.Group className="mb-3 w-100 mx-auto">
                    <Form.Label className='text-danger'>Role:</Form.Label>
                    <br></br>
                    <Form.Select {...register("role", { required: true })}>
                        <option value="Teacher">Teacher</option>
                        <option value="Registrar">Registrar</option>
                    </Form.Select>
                </Form.Group>
                <div className='text-center'>
                    <input type="submit" value='Assign' />
                </div>
            </Form>
        </div>
    );
};

export default EmailForm;