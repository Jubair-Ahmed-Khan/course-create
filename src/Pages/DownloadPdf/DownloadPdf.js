import html2pdf from 'html2pdf.js';
import React from 'react';
import Table from 'react-bootstrap/Table';

const DownloadPdf = () => {
    const handleDownload = () => {
        const invoice = document.getElementById('invoice');
        html2pdf().from(invoice).save("result.pdf");

    }
    return (
        <div>
            <div className='container-fluid shadow-lg w-75 my-5 py-2' id="invoice">
                <h2 className='text-danger text-center mb-3'>Student Info</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='container-fluid mx-auto w-25'>
                <button className="btn btn-primary text-center" onClick={handleDownload}>Download PDF</button>
            </div>
        </div>


    );
};

export default DownloadPdf;