import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
    return (
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <button className="burger-menu" onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <h2>Курс сабақтарының түрлері</h2>
        </div>
  
        <ul className="sidebar-list">
          <li><Link to="/homework">Үй жұмысы</Link></li>
          <li><Link to="/videos">Видеосабақ</Link></li>
        </ul>
      </div>
    );
  }

export default Sidebar;
