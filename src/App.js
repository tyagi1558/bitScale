import React from 'react';
import HeaderComponent from './HeaderComponent';
import SidebarComponent from './SidebarComponent';
import ToolbarComponent from './ToolbarComponent';
import TableComponent from './TableComponent';
import NotificationComponent from './NotificationComponent';

import './App.css';

function App() {
  return (
    <div className="app">
      <SidebarComponent />
      <div className="main-content">
        <HeaderComponent />
        <NotificationComponent />
        <ToolbarComponent />
        <TableComponent />
      </div>
    </div>
  );
}

export default App;
