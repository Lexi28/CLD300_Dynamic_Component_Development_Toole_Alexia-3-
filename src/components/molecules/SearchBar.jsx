import React from 'react';
import InputField from '../atoms/InputField';
import './SearchBar.css';

const SearchBar = ({
  searchValue,
  onSearchChange,
  onSearchClick,
  isLoading,
}) => {
  return (
    <div className="search-bar">
      <div className="search-input-container">
        <InputField
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={onSearchChange}
        />
      </div>
      <button
        className={`button ${isLoading ? 'pulsating' : ''}`}
        onClick={onSearchClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <div className="search-loading-spinner"></div>
            <span className="search-loading-text"></span>
          </>
        ) : (
          'Search'
        )}
      </button>
    </div>
  );
};

export default SearchBar;
