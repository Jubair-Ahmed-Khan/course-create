import React from 'react';

import * as XLSX from 'xlsx';

const ReadExcel = () => {

    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: 'buffer' })
                const wsName = wb.SheetNames[0];
                const ws = wb.Sheets[wsName];

                const data = XLSX.utils.sheet_to_json(ws);
                resolve(data);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((d) => {
            console.log(d);
        });
    };
    return (
        <div>
            <div className='container-fluid shadow-lg w-25 my-5 py-2'>
                <h4 className='text-danger my-3'>Please Select a file: </h4>
                <input type="file" onChange={(e) => {
                    const file = e.target.files[0];
                    readExcel(file);
                }} />
            </div>

        </div>
    );
};

export default ReadExcel;