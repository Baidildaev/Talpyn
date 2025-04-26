import React from 'react';
//import { Link } from 'react-router-dom';
import './HomePage.css';

import mathImage from '../assets/math.png'; 
import literacyImage from '../assets/literacy.png'; 

function HomePage() {
  return (
    <div className="homepage">
      <div className="banner">
        <h1 className="title">Talpyn</h1>
        <p className="subtitle">Білімді ел — күшті ел</p>
      </div>

      <div className="catalog">
        <h2>Курстар каталоги</h2>
        <div className="catalog-cards">
          <div className="catalog-card">
            <img src={mathImage} alt="Математика" />
            <h3>Математика</h3>
            <p>Оқу ұзақтығы: 1 ай</p>
            <p>Оқу басталуы: 22 сәуір</p>
            <p className="price">1 000 ₸</p>
            <button>Кәрзеңкеге қосу</button>
          </div>

          <div className="catalog-card">
            <img src={literacyImage} alt="Математикалық сауаттылық" />
            <h3>Математикалық сауаттылық</h3>
            <p>Оқу ұзақтығы: 1 ай</p>
            <p>Оқу басталуы: 22 сәуір</p>
            <p className="price">500 ₸</p>
            <button>Кәрзеңкеге қосу</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
