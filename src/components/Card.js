import React from "react";

const Card = ((props) => {

    const data = props.books;

    return (
        <div className="card">
            <img src={data.book_image} alt={data.title} />
            <h5>{data.title}</h5>
            <p>Rank : {data.rank} ({data.rank_last_week})</p>
        </div>
    )
})

export default Card;