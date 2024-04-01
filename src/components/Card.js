import React from "react";

const Card = (props) => {
  const data = props.books;

  return (
    <div className="card">
      <img
        src={data.volumeInfo.imageLinks?.thumbnail || ""}
        alt={data.volumeInfo.title}
      />
      <h5>{data.volumeInfo.title}</h5>
    </div>
  );
};

export default Card;
