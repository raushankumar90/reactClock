import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return clearInterval(interval);
  }, []);
  return (
    <>
      <div className="displayTime">{time.toLocaleString()}</div>
    </>
  );
}

export default App;
