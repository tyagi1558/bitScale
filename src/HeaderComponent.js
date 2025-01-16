import React, { useState } from 'react';
import './HeaderComponent.css';
import ProfileIcon from './assets/ProfileIcon.png';

const HeaderComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode); // Toggle dark mode on body
  };

  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      <div className="left-section">
        <button className="back-button">&larr;</button>
        <span className="file-name">Name of the file</span>
      </div>
      <div className="right-section">
        <div className="auto-save-toggle">
          <input type="checkbox" id="autoSave" className="toggle-checkbox" />
          <label htmlFor="autoSave" className="toggle-label"></label>
          <span className="auto-save-text">Auto Save</span>
        </div>
        <img src={ProfileIcon} alt="User Icon" className="user-icon" />
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {isDarkMode ? '🌙' : '🌞'}
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
