import React from "react";
import Card from "./Card";

const Section = (props) => {
  const data = props.books;
  const search = props.searchTerm;
  //map here
  console.log(data);
  const Cards = data.map((book) => {
    return <Card books={book} />;
  });

  return (
    <section>
      <h2
        className="section--heading"
        style={!search ? { visibility: "hidden" } : null}
      >
        Search Term: {search}
      </h2>
      <div className="section">{Cards.slice(0, 19)}</div>
    </section>
  );
};

export default Section;
