import React from "react";
import { Link } from "react-router-dom";

const save = () => {
    return (
        <div>
{/* span & route to page  */}
            <h3 className="book">Book</h3>
            <Link to="/search" >
                <p className="p"><a href="/save">Search</a></p>
            </Link>
{/* header text */}
            <div className="container text-center border border-primary">
                <div className="title mt-4">
                    <h1>Google Book Saved</h1>
                    <span>Search books and keep of Interest</span>
                </div>
            </div>
{/* result */}
            <div className="container re mt-4 text-center border border-primary">
                <span className="res m-3">Result</span>
                <div className="result"></div>
            </div>
        </div>
    );
}
export default save;