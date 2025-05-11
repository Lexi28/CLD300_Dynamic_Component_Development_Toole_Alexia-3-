import React, { useState, useEffect, useRef } from 'react';
import SearchBar from '../molecules/SearchBar';
import './SearchBarOrganism.css';

const SearchBarOrganism = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const dropdownRef = useRef(null);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    setIsLoading(true);
    setShowDropdown(false);
    console.log('Search clicked:', searchValue);

    
    setTimeout(() => {
      setIsLoading(false);
     
      const results = []; 

      if (results.length === 0) {
        setShowDropdown(true);
      } else {
        setSearchResults(results);
      }
    }, 2000);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="search-bar-organism">
      <SearchBar
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onSearchClick={handleSearchClick}
        isLoading={isLoading}
      />
      {showDropdown && (
        <div className="dropdown-menu" ref={dropdownRef}>
          <p>Sorry we couldn't find what you were looking for</p>
          <h3>Popular Search Terms</h3>
          <ul>
            <li>Mystic Voyager Vol.3</li>
            <li>Quantum Panther</li>
            <li>Pixelated Sphinx</li>
            <li>Void Dragons</li>
          
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBarOrganism;
