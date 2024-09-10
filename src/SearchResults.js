import React from 'react';
import './SearchResults.css';

function SearchResults({ recipes }) {
  if (!recipes.length) {
    return <p>No recipes found.</p>;
  }

  return (
    <section className="search-results">
      {recipes.map((recipe) => (
        <div key={recipe.title} className="item-result">
          <h2>
            <a href={recipe.link} target="_blank" rel="noreferrer">
              {recipe.title}
            </a>
          </h2>
          <p className="meta-description">{recipe.description}</p>
          <a href={recipe.link} target="_blank" rel="noreferrer">
            More information
          </a>
        </div>
      ))}
    </section>
  );
}

export default SearchResults;