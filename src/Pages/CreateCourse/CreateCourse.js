import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const CreateCourse = () => {
    const [courses, setCourses] = useState([]);
    const [semester, setSemester] = useState("");


    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, []);

    //

    // const filteredCourses = courses?.filter(course => course.key === semester);
    // const [selectedCourses] = filteredCourses?.courses;
    // const [selectedTeachers] = selectedCourses?.teachers;



    return (
        <div className='container-fluid shadow-lg w-25 my-5 py-2'>

            <h4 className='text-center'>Create Course</h4>
            <Form.Group className="mb-3 w-100 mx-auto">
                <Form.Label className='text-danger'>Semester Name:</Form.Label>
                <br></br>
                <Form.Select onChange={(e) => setSemester(e.target.value)}>
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
            <Form.Group className="mb-3 w-100 mx-auto">
                <Form.Label className='text-danger'>Session:</Form.Label>
                <br></br>
                <Form.Select>
                    <option value="16">2015-16</option>
                    <option value="17">2016-17</option>
                    <option value="18">2017-18</option>
                    <option value="19">2018-19</option>
                    <option value="20">2019-20</option>
                    <option value="21">2020-21</option>
                    <option value="22">2021-22</option>
                </Form.Select>
            </Form.Group>


            <Table striped bordered hover>
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
                            <Form.Select>
                                <option value="lubna">Lubna Yasmin Pinky</option>
                                <option value="motiur">Md. Motiur Rahman</option>
                                <option value="nasir">Mostofa Kamal Nasir</option>
                            </Form.Select>
                        </td>
                    </tr>


                </tbody>
            </Table>


        </div>
    );
};

export default CreateCourse;