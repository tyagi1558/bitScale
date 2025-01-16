import React from 'react';
import './SidebarComponent.css';
import HeaderIcon1 from './assets/HeaderIcon1.png';
import HeaderIcon2 from './assets/HeaderIcon2.png';
import HeaderIcon3 from './assets/HeaderIcon3.png';
import HeaderIcon4 from './assets/HeaderIcon4.png';
import HeaderIcon5 from './assets/HeaderIcon5.png';

const SidebarComponent = () => {
  return (
    <div className="sidebar">
      <div className="top-icons">
        <button className="sidebar-icon">
          <img src={HeaderIcon1} alt="Icon 1" />
        </button>
        <button className="sidebar-icon">
          <img src={HeaderIcon2} alt="Icon 2" />
        </button>
        <button className="sidebar-icon">
          <img src={HeaderIcon3} alt="Icon 3" />
        </button>
      </div>
      <div className="bottom-icons">
        <button className="sidebar-icon">
          <img src={HeaderIcon4} alt="Icon 4" />
        </button>
        <button className="sidebar-icon">
          <img src={HeaderIcon5} alt="Icon 5" />
        </button>
      </div>
    </div>
  );
};

export default SidebarComponent;
