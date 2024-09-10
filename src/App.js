import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import Footer from './Footer.js';
import recipes from './data.js';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const filterRecipes = () => {
      console.log(recipes)
      const results = recipes.filter((recipe) => {
        const searchTextLower = searchTerm.toLowerCase();
        return (
          recipe.title.toLowerCase().includes(searchTextLower) ||
          recipe.description.toLowerCase().includes(searchTextLower) ||
          recipe.tags.toLowerCase().includes(searchTextLower)
        );
      });
      setFilteredRecipes(results);
    };

    filterRecipes();
  }, [searchTerm]); // Rerun useEffect when searchTerm changes

  const handleSearch = (value) => {
    setSearchTerm(value.trim()); // Trim whitespace before searching
  };

  return (
    <div className="App">
      <header>
        <h1>Search Your Recipe!</h1>
      </header>
      <main>
        <SearchForm onSearch={handleSearch} />
        <SearchResults recipes={filteredRecipes} />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;