import React from "react";
import './App.css'

export default function Sidebar(){
    return(
        // <div className="big-white">
        //     <div className="m-2">
        //         <i className="bi bi-bootstrap-fill me-2 fs-4"></i>
        //         <span className="brand-name fs-4">Luxury Hostels</span>
        //     </div>
        //     <hr className="text-dark"/>
        //     <div className="list-group list-group-flush">
        //         <a className="list-group-item py-2">
        //             <i className="bi bi-speedometer2 fs-5 me-3"></i>
        //             <span className="fs-5">Dashboard</span>
        //         </a>
        //         <a className="list-group-item py-2">
        //             <i className="bi bi-house fs-5 me-3"></i>
        //             <span className="fs-5">Home</span>
        //         </a>
        //         <a className="list-group-item py-2">
        //             <i className="bi bi-table fs-5 me-3"></i>
        //             <span className="fs-5">Products</span>
        //         </a>
        //         <a className="list-group-item py-2">
        //             <i className="bi bi-clipboard-data fs-5 me-3"></i>
        //             <span className="fs-5">Report</span>
        //         </a>
        //         <a className="list-group-item py-2">
        //             <i className="bi bi-people fs-5 me-3"></i>
        //             <span className="fs-5">Customers</span>
        //         </a>
        //         <a className="list-group-item py-2">
        //             <i className="bi bi-power fs-5 me-3"></i>
        //             <span className="fs-5">Logout</span>
        //         </a>
                

        //     </div>
        // </div>

        <div className="big-white d-flex justify-content-between mt-3">
        <div className="m-2 d-inline">
            <i className="bi bi-bootstrap-fill me-2 fs-4"></i>
            <span className="brand-name fs-4">Book Easy</span>
        </div>
        <hr className="text-dark d-inline"/>
        <div className="list-group list-group-flush d-inline">
            <a className="list-group-item py-2 d-inline mt-1">
                <i className="bi bi-speedometer2 fs-5 me-3"></i>
                <span className="fs-5">Dashboard</span>
            </a>
            <a className="list-group-item py-2 d-inline mt-1">
                <i className="bi bi-house fs-5 me-3"></i>
                <span className="fs-5">Home</span>
            </a>
            <a className="list-group-item py-2 d-inline mt-1">
                <i className="bi bi-table fs-5 me-3"></i>
                <span className="fs-5">Products</span>
            </a>
            <a className="list-group-item py-2 d-inline mt-1">
                <i className="bi bi-clipboard-data fs-5 me-3"></i>
                <span className="fs-5">Report</span>
            </a>
            <a className="list-group-item py-2 d-inline mt-1">
                <i className="bi bi-people fs-5 me-3"></i>
                <span className="fs-5">Customers</span>
            </a>
            <a className="list-group-item py-2 d-inline mt-1">
                <i className="bi bi-power fs-5 me-3"></i>
                <span className="fs-5">Logout</span>
            </a>
        </div>
    </div>
    
    


    );
}
