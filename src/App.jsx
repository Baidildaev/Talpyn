import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CourseCard from './components/CourseCard';
import HomePage from './components/HomePage'; 
import TestPage from './components/TestPage'; 
import LessonPage from './components/LessonPage'; 
import './App.css';

import trigImage from './assets/trigonometry.png';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const courses = [
    { title: 'Matematika', price: '1000KZT', description: 'Very helpful', image: trigImage },
    { title: 'Тригонометрия', price: '2000KZT', description: 'Very helpful', image: trigImage },
  ];

  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />

      <div style={{ display: 'flex' }}>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        <div style={{ marginLeft: sidebarOpen ? '260px' : '20px', padding: '20px', flexGrow: 1, transition: 'margin 0.3s' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/preparation" element={
              <>
                <div className="courses-container">
                  {courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                  ))}
                </div>
              </>
            } />
            <Route path="/test" element={<TestPage />} />
            <Route path="/lessons" element={<LessonPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
