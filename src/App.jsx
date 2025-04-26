import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import HomePage from './components/HomePage'; // импорт новой главной
import TestPage from './components/TestPage'; // импорт тестов
import './App.css';

import trigImage from './assets/trigonometry.png';

function App() {
  const courses = [
    { title: 'Matematika', price: '1000KZT', description: 'Very helpful', image: trigImage },
    { title: 'Тригонометрия', price: '2000KZT', description: 'Very helpful', image: trigImage },
  ];

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preparation" element={
          <>
            <div className="search-container">
              <input type="text" placeholder="Поиск..." className="search-input" />
            </div>
            <div className="courses-container">
              {courses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </>
        } />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;
