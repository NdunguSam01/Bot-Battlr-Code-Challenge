import { useEffect, useState } from 'react';
import './App.css';
import './css/Bots.css'
import Army from './components/Army';
import BotCollection from './components/BotCollection';

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
    const armyFilter=myBotArmy.find(myBot => myBot.id === bot.id)

    if(!armyFilter)
    {
      //Updating the myBotArmy state
      setMyBotArmy([
        ...myBotArmy,
        bot
      ])
    }
    else
    {
     alert("Bot exists in your bot collection")
    }
  }

  return (
    <>
      <Army myBotArmy={myBotArmy}/>
      <BotCollection bots={botCollection} addBotToArmy={addBotToArmy}/>
    </>
  );
}

export default App;
