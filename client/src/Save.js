import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Save extends Component {

    constructor() {
        super();
        this.setState = {
            savedBooks: ""
        }
    }

    // the function that display saved books

    // the function removes
    // the function purchases

    render() {
        return (
            <div>
                {/* span & route to page  */}
                <h3 className="book">Book</h3>
                <Link to="/search" >
                    <p className="p">Search</p>
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
                    <br /><br />
                {/* books from data base displays here*/}
                    <div className="result">

                    </div>
                </div>
            </div>
        )
    }
}
