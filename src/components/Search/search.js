import React, { useState } from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";

const Search = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return value && user && user.name.toLowerCase().includes(value);
        });
        setResults(results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="Trap">
      <div className="foden">
        <div className="input-wrapper">
          <FaSearch id="search-icon" />
          <input
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
