import React, { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const userInput = e.target.value;
    setSearchValue(userInput);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={() => handleSubmit(searchValue)}>Search</button>
    </div>
  );
};

export default SearchBar;
