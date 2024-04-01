import React from "react";

const Options = (props) => {
  const { setSelectedGenre } = props;

  function handleClick(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="options">
      <h5 className="genre" onClick={() => handleClick("Home")}>
        Home
      </h5>
      <h5 className="genre" onClick={() => handleClick("Best Sellers")}>
        Best Sellers
      </h5>
      <h5 className="genre" onClick={() => handleClick("Trending")}>
        Trending
      </h5>
      <h5 className="genre" onClick={() => handleClick("Novels")}>
        Novels
      </h5>
      <h5 className="genre" onClick={() => handleClick("Fiction")}>
        Fiction
      </h5>
      <h5 className="genre" onClick={() => handleClick("Non-Fiction")}>
        Non-Fiction
      </h5>
      <h5 className="genre" onClick={() => handleClick("Fan Fiction")}>
        Fan Fiction
      </h5>
      <h5 className="genre" onClick={() => handleClick("Childrens")}>
        Childrens
      </h5>
      <h5 className="genre" onClick={() => handleClick("Educational")}>
        Educational
      </h5>
    </div>
  );
};

export default Options;
