import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Save extends Component {

    constructor() {
            super();
            this.state = {
                savedBooks: "",
                savedBookArray: [],
                thisbook: "purchase is loading"
            }
        }
        // react lifecycle method function that display saved books directly
    componentDidMount = () => {
            // axios hitting the route "/books/save" in back-end then pul the data from it to front end 
            axios.get(`/books/save`).then(data => {
                console.log("this is from save.js axios.get:", data);
                this.setState({
                    savedBookArray: data.data
                })
            }).catch(err => {
                console.log(err);

            })
        }
        // the function removes
    remove = () => {

        }
        // the function purchases
    purchaseBook = () => {
        const perc = this.state.thisbook;
        console.log(perc);
    }

    render() {
        return ( <
            div > { /* span & route to page  */ } <
            h3 className = "book" > Book < /h3> <
            Link to = "/search" >
            <
            p className = "p" > Search < /p> <
            /Link> { /* header text */ } <
            div className = "container text-center border border-primary" >
            <
            div className = "title mt-4" >
            <
            h1 > Google Book Saved < /h1> <
            span className = "span" > Search books and keep of Interest < /span> <
            /div> <
            /div> { /* result */ } <
            div className = "container mt-4 text-center border border-primary" >
            <
            span className = "res m-3" > Result < /span> <
            br / > < br / > { /* books from data base displays here*/ } <
            div className = "result" > {
                this.state.savedBookArray.map((savedBook, index) => (

                    <
                    div className = "card mt-4"
                    key = { index } >
                    <
                    div className = "card-body" >
                    <
                    h2 className = "card-title" > Title: { savedBook.title } < /h2> <
                    h3 className = "card-subtitle mb-2 text-muted" > Author: { savedBook.authors } < /h3> <
                    p className = "card-text" > < b > Description: < /b> {savedBook.description}</p >
                    <
                    img className = "img mb-2"
                    src = { savedBook.image }
                    />

                    { /* <a href={savedBook.link} className="float-left read card-subtitle mb-2 text-muted"><b>read more...</b></a> */ } <
                    button className = "btn btn-outline-secondary purchaseBtn"
                    onClick = {
                        () => this.purchaseBook() }
                    type = "button" > purchase < /button> <
                    br / >
                    <
                    button className = "somebtn float-left btn btn-outline-secondary"
                    onClick = {
                        () => this.remove() }
                    type = "button" > remove < /button>

                    <
                    /div> <
                    /div>
                ))
            }

            <
            /div> <
            /div> <
            /div>
        )
    }
}