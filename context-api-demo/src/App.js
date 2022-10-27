import React from 'react';
import Navbar from './Navbar';
import CourseList from './CourseList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <CourseList />
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
