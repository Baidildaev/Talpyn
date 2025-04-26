import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [language, setLanguage] = useState('kz'); // по умолчанию казахский

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        Σ Talpyn
      </Link>

      <div className="menu">
        <Link to="/preparation">
          <button>{language === 'kz' ? 'Дайындық' : language === 'ru' ? 'Подготовка' : 'Preparation'}</button>
        </Link>
        <Link to="/test">
          <button>{language === 'kz' ? 'Тестілеу' : language === 'ru' ? 'Тестирование' : 'Testing'}</button>
        </Link>
      </div>

      <div className="language">
        <select value={language} onChange={handleLanguageChange}>
          <option value="kz">KZ</option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
