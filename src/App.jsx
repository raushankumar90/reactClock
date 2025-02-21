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
    // always use clearInterval to cleanup the previous
    // setInveral as after unmounting the component this setInterval  
    // will keep running behind,which will cause memory leak and unwanted behavior
    return ()=>clearInterval(interval);
    // use empty dependency: useEffect will run only one time
  }, []);
  return (
    <>
      <div className="displayTime">{time.toLocaleString()}</div>
    </>
  );
}

export default App;