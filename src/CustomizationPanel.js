import React from 'react';
import './CustomizationPanel.css';

const CustomizationPanel = ({ allIcons, selectedIcons, toggleIconSelection }) => {
  return (
    <div className="customization-panel">
      <h3>Customize Sidebar</h3>
      <div className="icon-selection">
        {allIcons.map((icon) => (
          <div key={icon.id} className="icon-option">
            <input
              type="checkbox"
              checked={selectedIcons.includes(icon.id)}
              onChange={() => toggleIconSelection(icon.id)}
            />
            <img src={icon.imgSrc} alt={icon.alt} />
            <span>{icon.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomizationPanel;
