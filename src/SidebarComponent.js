import React, { useState } from 'react';
import './SidebarComponent.css';
import HeaderIcon1 from './assets/HeaderIcon1.png';
import HeaderIcon2 from './assets/HeaderIcon2.png';
import HeaderIcon3 from './assets/HeaderIcon3.png';
import HeaderIcon4 from './assets/HeaderIcon4.png';
import HeaderIcon5 from './assets/HeaderIcon5.png';
import CustomizationPanel from './CustomizationPanel'; 

const SidebarComponent = () => {
  const allIcons = [
    { id: 1, imgSrc: HeaderIcon1, alt: 'Dashboard' },
    { id: 2, imgSrc: HeaderIcon2, alt: 'Settings' },
    { id: 3, imgSrc: HeaderIcon3, alt: 'Notifications' },
    { id: 4, imgSrc: HeaderIcon4, alt: 'Creadit' },
    { id: 5, imgSrc: HeaderIcon5, alt: 'Network' }
  ];
  

  const [selectedIcons, setSelectedIcons] = useState(allIcons.map(icon => icon.id));

  const [isCustomizationPanelVisible, setCustomizationPanelVisible] = useState(false);

  const toggleIconSelection = (id) => {
    setSelectedIcons((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter(iconId => iconId !== id)  
        : [...prevSelected, id]  
    );
  };

  const topIcons = allIcons.slice(0, 3);
  const bottomIcons = allIcons.slice(3, 5);

  return (
    <div className="sidebar">
      <button
        className="customize-button"
        onClick={() => setCustomizationPanelVisible(prev => !prev)}
      >
        Customize Sidebar
      </button>

      <div className="top-icons">
        {topIcons.map(
          (icon) =>
            selectedIcons.includes(icon.id) && (
              <button
                key={icon.id}
                className="sidebar-icon"
                onClick={() => toggleIconSelection(icon.id)}
              >
                <img src={icon.imgSrc} alt={icon.alt} />
              </button>
            )
        )}
      </div>

      <div className="bottom-icons">
        {bottomIcons.map(
          (icon) =>
            selectedIcons.includes(icon.id) && (
              <button
                key={icon.id}
                className="sidebar-icon"
                onClick={() => toggleIconSelection(icon.id)}
              >
                <img src={icon.imgSrc} alt={icon.alt} />
              </button>
            )
        )}
      </div>

      {isCustomizationPanelVisible && (
        <CustomizationPanel
          allIcons={allIcons}
          selectedIcons={selectedIcons}
          toggleIconSelection={toggleIconSelection}
        />
      )}
    </div>
  );
};

export default SidebarComponent;
