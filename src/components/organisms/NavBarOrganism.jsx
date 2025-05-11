// NavBarOrganism.jsx
import React from 'react';
import SearchBarOrganism from './SearchBarOrganism';  // Ensure path is correct
import './NavbarOrganism.css'; // Import your CSS file for styling

const NavBarOrganism = () => {
  return (
    <div className="navbar">
      <div className="logo">AI NFT SITE</div>
      <SearchBarOrganism />
      <div className="nav-links">
        <a href="/explore">Explore</a>
        <a href="/drops">Drops</a>
        <a href="/generate">Generate</a>
      </div>
    </div>
  );
};

export default NavBarOrganism;

