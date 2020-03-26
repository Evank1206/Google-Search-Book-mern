import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Save extends Component {

    constructor() {
        super();
        this.setState = {
            savedBooks: "",
            savedBookArray: []
        }
    }
    // the function that display saved books
    GoogleSave = (title, author, description, image) => {

        axios.post(`/books/${this.state.savedBooks}`, { title: title, authors: author, description: description, image: image }).then(res => {
            console.log(res.data);
            this.setState({
                savedBookArray: res.data
            }).catch(err => {
                console.log(err);
            })
        })
    }
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
                        {this.state.savedBookArray.map((savedBook, index) => (

                            <div className="card mt-4" key={index}>
                                <div className="card-body">
                                    <h2 className="card-title">Title: {savedBook.volumeInfo.title}</h2>
                                    <h3 className="card-subtitle mb-2 text-muted">Author: {savedBook.volumeInfo.authors}</h3>
                                    <p className="card-text"><b>Description:</b> {savedBook.volumeInfo.description}</p>
                                    <img className="img mb-2" src={savedBook.volumeInfo.imageLinks.thumbnail} />
                                    {/* <br /> */}
                                    {/* <a href={savedBook.accessInfo.webReaderLink} className="float-left read card-subtitle mb-2 text-muted"><b>read more...</b></a> */}
                                    {/* <button className="btn btn-outline-secondary" onClick={() => this.saveBook(savedBook.volumeInfo.title, savedBook.volumeInfo.authors, savedBook.volumeInfo.description, savedBook.volumeInfo.imageLinks.thumbnail, savedBook.selfLink)} type="button">purchase</button> */}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        )
    }
}
