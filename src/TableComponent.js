import React from 'react';
import './TableComponent.css';
import BmwLogo from './assets/BmwLogo.png'; 
import BitscaleLogo from './assets/BitscaleLogo.png';
import GoogleLogo from './assets/GoogleLogo.png';
import AppleLogo from './assets/AppleLogo.png';
import FigmaLogo from './assets/FigmaLogo.png';
import EnrichLogo from './assets/EnrichLogo.png'; 
import ActionLogo from './assets/ActionLogo.png';
import CellTrangel from './assets/CellTrangel.png';
import LoadingIcon from './assets/LoadingIcon.png';
import HeaderplayIcon from './assets/HeaderplayIcon.png';

import A from './assets/A.png';
import playIcon from './assets/playIcon.png';

const TableComponent = () => {
  return (
    <div className="table-wrapper">
      <table className="styled-table">
        <thead>
          <tr>
            <th></th>
            <th><img src={HeaderplayIcon} alt="play Logo" className="icon header-icon" /></th>
            <th><img src={A} alt="A Logo" className="icon header-icon black-bg" /> Input Column</th>
            <th><img src={ActionLogo} alt="Action Logo" className="icon header-icon" /> Action column</th>
            <th><img src={EnrichLogo} alt="Enrich Logo" className="icon header-icon" /> Enrich Company</th>
            <th><span className="icon">➕</span> Add Column</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><img src={playIcon} alt="Play Icon" className="icon" /></td>
            <td>Oct 12, 2024 at 14:08 PM</td>         
            <td>Bitscale Evaluation - Account relev...</td>
            <td><img src={BitscaleLogo} alt="Bitscale Logo" className="icon" style={{paddingLeft:'5px'}} /> Bitscale Evaluation - Account relev...</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>
    <img src={playIcon} alt="Play Icon" className="icon" />
  </td>
  <td>
    Oct 12, 2024 at 14:08 PM
  </td>
            <td ><img src={CellTrangel} alt="Play Icon" className="icon" /> cell data size exceeds limit</td>
            <td><img src={BmwLogo} alt="BMW Logo" className="icon" /> BMW Evaluation - Relevancy c...</td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>
    <img src={playIcon} alt="Play Icon" className="icon" />
  </td>
  <td>
    Oct 12, 2024 at 14:08 PM
  </td>
            <td><span className="icon">🔗</span> <a href="https://www.linkedin.com/in/anmol-tyagi-0176801b2/">https://www.linkedIn.com/bitScale.ai/sample</a></td>
            <td><img src={GoogleLogo} alt="Google Logo" className="icon" /> Google Evaluation - Lievancy...</td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td>
    <img src={playIcon} alt="Play Icon" className="icon" />
  </td>
  <td>
    Oct 12, 2024 at 14:08 PM
  </td>
            <td ><img src={LoadingIcon} alt="Play Icon" className="icon" /> Loading data, Please wait</td>
            <td><img src={AppleLogo} alt="Apple Logo" className="icon" /> Apple Evaluation - Olivancy che...</td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td>
    <img src={playIcon} alt="Play Icon" className="icon" />
  </td>
  <td>
    Oct 12, 2024 at 14:08 PM
  </td>
            <td ><img src={LoadingIcon} alt="Play Icon" className="icon" /> Loading data, Please wait</td>
            <td><img src={FigmaLogo} alt="Figma Logo" className="icon" /> Figma Evaluation - Evancy che...</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="5" className="add-row"><span className="icon">➕</span> Add Row</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
