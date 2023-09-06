import React from "react";
import Card from './Card';

const Section = ((props) => {

    const data = props.data.results.books;
    console.log(data);
    
    //map here
    const Cards = data.map((book) => {
        return <Card books={book}/>
    })
    
    return (
        <section>
            <h2 className="section--heading">Fiction</h2>
            <div className="section">{Cards.slice(0,8)}</div>
        </section> 
    )
})

export default Section;