import React from 'react';
import './ToolbarComponent.css';
import searchIcon from './assets/SearchIcon.png';
import rowIcon from './assets/RowIcon.png';
import columnIcon from './assets/ColumnIcon.png';
import filterIcon from './assets/FilterIcon.png';
import sortIcon from './assets/SortIcon.png';
import enrichIcon from './assets/ButtonStarIcon.png';
import shareIcon from './assets/ShareIcon.png';
import downloadIcon from './assets/DownloadIcon.png';
import deleteIcon from './assets/DeleteIcon.png';

const ToolbarComponent = () => {
  return (
    <div className="toolbar">
      <div className="search-container">
        <div className="search-bar">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input type="text" className="search-input" placeholder="Search" />
        </div>
      </div>
      <div className="toolbar-icons">
        <span className="icon1">
          <img src={rowIcon} alt="Row" className="icon-img" /> 1/1 Row
        </span>
        <span className="icon1">
          <img src={columnIcon} alt="Column" className="icon-img" /> 3/3 Column
        </span>
        <span className="icon1">
          <img src={filterIcon} alt="Filter" className="icon-img" /> 0 Filter
        </span>
        <span className="icon1">
          <img src={sortIcon} alt="Sort" className="icon-img" /> Sort
        </span>
      </div>
      <button className="enrich-button">
        <img src={enrichIcon} alt="Enrich" className="icon-img" /> Enrich
      </button>
      <div className="toolbar-actions">
        <button className="action-icon">
          <img src={shareIcon} alt="Share" className="icon-img" />
        </button>
        <button className="action-icon">
          <img src={downloadIcon} alt="Download" className="icon-img" />
        </button>
        <button className="action-icon delete-icon">
          <img src={deleteIcon} alt="Delete" className="icon-img" />
        </button>
      </div>
    </div>
  );
};

export default ToolbarComponent;
