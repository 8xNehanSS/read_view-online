import React from "react";

const Card = ((props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.alt} />
            <h5>{props.bookname}</h5>
            <p>{props.rating}/5 ({props.reviews})</p>
        </div>
    )
})

export default Card;