import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            bookName: "",
            searchResults: []
        }
    }
    // the function that grabs value from input
    handleChange = e => {
        e.preventDefault();
        this.setState({
            bookName: e.target.value
        })
        // console.log(this.state);
    }
    // the function send info to back-end using axios
    SubmitValue = (e) => {
        e.preventDefault();
        // console.log(this.state.bookName);
        // this function hitting /search routes which is in apiRoutes file route.get("/search/:book") : qeury.params
        axios.get(`search/${this.state.bookName}`).then(res => {
            console.log(res.data)
            this.setState({
                searchResults: res.data
            })
        }).catch(err => {
            console.log(err);
        })

    }
    // my save function
    saveBook = (title, author, description, image, link) => {
        console.log("title: ", title)
        console.log("author: ", author);
        console.log("description:", description)
        console.log("image: ", image)
        console.log("link: ", link)

        axios.post('books/save', { title: title, authors: author, description: description, image: image, link: link }).then(res => {
            console.log(res)
        })
    }

    render() {

        return (
            <div>
                {/* span & route to page  */}
                <div className="#">
                    <h3 className="book">Book</h3>
                    <Link to="/save">
                        <p className="p">Keep</p>
                    </Link>
                </div>
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
                        <input type="text" className="form-control" value={this.state.bookName} onChange={this.handleChange} placeholder="Search Books" />
                        <br />
                        <button className="btn btn-outline-secondary" onClick={this.SubmitValue} type="button">Search</button>
                    </div>
                </div>
                {/* result */}
                <div className="container re mt-4 text-center border border-primary">
                    <span className="res m-3">Result From Search</span>
                    <br /><br />
                    <div className="result">
                        {this.state.searchResults.map((book, index) => (
                            // <h1>{book.accessInfo.country}</h1>

                            // example begins here
                            <div className="card mt-4" key={index}>
                                <div className="card-body">
                                    <h2 className="card-title">Title: {book.volumeInfo.title}</h2>
                                    <h3 className="card-subtitle mb-2 text-muted">Author: {book.volumeInfo.authors}</h3>
                                    <p className="card-text"><b>Description:</b> {book.volumeInfo.description}</p>
                                    <img className="img mb-2" src={book.volumeInfo.imageLinks.thumbnail} />
                                    <br />
                                    <a href={book.accessInfo.webReaderLink} className="float-left read card-subtitle mb-2 text-muted"><b>read more...</b></a>
                                    <button className="btn btn-outline-secondary" onClick={() => this.saveBook(book.volumeInfo.title, book.volumeInfo.authors, book.volumeInfo.description, book.volumeInfo.imageLinks.thumbnail, book.selfLink)} type="button">Save</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};


export default Search;
