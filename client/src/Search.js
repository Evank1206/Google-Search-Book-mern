import React from "react";
import { Link } from "react-router-dom";

const Search = () => {

    const search = () => {
        console.log("button clicked");

    }

    return (
        <div>
{/* span & route to page  */}
            <h3 className="book">Book</h3>
            <Link to="/save">
                <p className="p"><a href="/save" >Keep</a></p>
            </Link>
{/* header text */}
            <div className="container text-center border border-primary">
                <div className="title mt-4">
                    <h1>Google Book Search</h1>
                    <span>Search books and keep of Interest</span>
                </div>
            </div>
{/*search input */}
            <div className="container mt-4 text-center border border-primary ">
                {/* <span className="book m-3">Book</span> */}
                <div className="search mt-4">
                    <input type="text" className="form-control" placeholder="Search Books" />
                    <br/>
                    <button className="btn btn-outline-secondary" onClick={search} type="button">Search</button>
                </div>
            </div>
{/* result */}
            <div className="container re mt-4 text-center border border-primary">
                <span className="res m-3">Result</span>
                <div className="result"></div>
            </div>
        </div>
    );
};


export default Search;
