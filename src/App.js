import { useState } from 'react';
import './App.css'
import Content from './components/Content';
import Search from './components/Search';


function App() {
  const [fcity, setfcity] = useState("New York")
  function setcite(x){
    setfcity(x)
  }
  return (
    <div>
    <Search setcite={setcite}/>
    <Content fcity={fcity}/>
    </div>
  );
}

export default App;
