import React from 'react';

function SearchForm({ onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Search your recipe here"
        id="search-input"
        onChange={handleInputChange}
      />
      <button type="button" onClick={() => handleInputChange()}>Search</button>
    </section>
  );
}

export default SearchForm;