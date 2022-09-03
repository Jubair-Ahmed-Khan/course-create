import React, { useState } from "react";
import { default as ReactSelect } from "react-select";
import Option from "../Option/Option";

const SearchBar = () => {
    const [optionSelected, setOptionSelected] = useState(null);
    const [teacherList, setTeacherList] = useState([]);

    const teacherOptions = [
        { value: "lubna", label: "Lubna Yasmin Pinky" },
        { value: "nasir", label: "Mostofa Kamal Nasir" },
        { value: "motiur", label: "Md. Motiur Rahman" },
        { value: "mahfuz", label: "Md. Mahfuz Reza" },
        { value: "delowar", label: "A.S.M Delowar Hossain" },
        { value: "hadifur", label: "Hadifur Rahman" },
    ];
    const handleChange = (selected) => {
        setOptionSelected(selected);
        setTeacherList(selected);
        //console.log(selected);
    };
    const handleClick = () => {
        console.log(teacherList);
    };
    return (
        <div className='container-fluid shadow-lg w-75 my-5 py-2'>
            <h5 className="text-center">checkbox in Select Options</h5>
            <div>
                <span
                    className="d-inline-block"
                    data-toggle="popover"
                    data-trigger="focus"
                    data-content="Please selecet account(s)"
                >
                    <ReactSelect
                        options={teacherOptions}
                        isMulti
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        components={{
                            Option
                        }}
                        onChange={handleChange}
                        allowSelectAll={true}
                        value={optionSelected}
                    />

                </span>
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={handleClick}>Submit</button>
            </div>

        </div>

    );
};

export default SearchBar;