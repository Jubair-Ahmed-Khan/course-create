import React from 'react';
import ApplyToSupervisor from '../ApplyToSupervisor/ApplyToSupervisor';

const MyProject = () => {
    const projects = [
        {
            id: 1,
            subject: "Machine Learning",
            email: "lubnaju@yahoo.com",
            members: ["Shihab", "Tanvir", "Jubair"],
            status: "Pending",
            description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        },
        {
            id: 2,
            subject: "Artificial Intelligence",
            email: "lubnaju@yahoo.com",
            members: ["Shihab", "Tanvir", "Nebir"],
            status: "Rejected",
            description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        },
        {
            id: 3,
            subject: "Machine Learning",
            email: "lubnaju@yahoo.com",
            members: ["Shihab", "Tanvir", "Muhit"],
            status: "Approved",
            description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        }
    ];

    //console.log(projects);
    return (
        <div>
            <div className='container my-4 py-3 w-100'>
                <h4 className='text-center mb-4'>My Projects</h4>
                {
                    projects?.map(x => <ApplyToSupervisor key={x.id} details={x}></ApplyToSupervisor>)
                }
            </div>
        </div>
    );
};

export default MyProject;