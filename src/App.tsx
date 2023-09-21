import {useState} from 'react'
import Navbar from './components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] =useState(true)
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  return (
    <main className={`bg-gray-200 ${darkMode ? 'dark' : 'light'}`}>
      <Navbar DarkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      {/* Rest of your content */}
    </main>
  );
};

export default App;
