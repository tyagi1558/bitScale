import React from 'react';
import './HeaderComponent.css';
import ProfileIcon from './assets/ProfileIcon.png';

const HeaderComponent = () => {
  return (
    <header className="header">
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
      </div>
    </header>
  );
};

export default HeaderComponent;
