import { useEffect, useState } from 'react';
import './App.css';

function App() 
{
  const [botCollection, setBotCollections]=useState([])
  const [myBotArmy, setMyBotArmy]=useState([])

  //Fetching data from the API
  useEffect(()=>
  {
    fetch("http://127.0.0.1:3001/bots")
      .then(response => response.json())
      .then(bots => setBotCollections(bots))
  },[])

  //Function to capture the clicked bot and add it to the myBotArmy state
  const addBotToArmy = bot =>
  {
    //Updating the myBotArmy state
    setMyBotArmy([
      ...myBotArmy,
      bot
    ])
  }

  return (
    <>
      <h1>My Bot Collection</h1>
    </>
  );
}

export default App;
