import React from "react";
import "./search.css"
import SerachResult from "./SearchResult";

const Results = ({ results }) =>{
    return(
        <div className="results-list">
            {
                results.map((results,id)=>{
                    return <SearchResult result={result} key={id}/>;
                })
            }
        </div>
    )
}

export default Results