import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SidebarList from './components/sidebar-list';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <SidebarList />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
