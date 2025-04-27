import React from 'react';

function TestPage() {
  const openTest = () => {
    window.open('https://talpyn.moodlecloud.com/mod/quiz/view.php?id=36', '_blank');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Тестирование</h1>
      <p>Нажмите на кнопку ниже, чтобы пройти тест:</p>
      <button 
        onClick={openTest} 
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          backgroundColor: '#5a9bd4',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Пройти тест
      </button>
    </div>
  );
}

export default TestPage;
