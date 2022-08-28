import React from 'react';
// import StudentInfo from '../StudentInfo/StudentInfo';
import TeacherInfo from '../TeacherInfo/TeacherInfo';
import './ShowInfo.css';
// import { MdOutlineMail } from "react-icons/md"

const ShowInfo = () => {

    return (
        <div className='container'>
            {/* <h2 className='text-center text-danger py-3'>Students Info</h2> */}
            <h2 className='text-center text-danger py-3'>Teachers Info</h2>


            {/* <StudentInfo></StudentInfo>
            <StudentInfo></StudentInfo> */}
            <TeacherInfo></TeacherInfo>

        </div>
    );
};

export default ShowInfo;