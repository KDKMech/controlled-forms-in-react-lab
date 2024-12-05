import React from "react";
import Bookshelf from "./Bookshelf";

const BookCard = (props) => {
    return (
        <div className="bookCard">
            <h2>{props.title}</h2>
            <p>{props.author}</p>
        </div>
    )
}
export default BookCard;
