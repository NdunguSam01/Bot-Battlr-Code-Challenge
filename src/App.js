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
    const armyFind=myBotArmy.find(myBot => myBot.id === bot.id)

    if(!armyFind)
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

  //Function to remove bot from army
  const removeFromArmy = bot =>
  {
    //Filtering through the myBotArmy variable and returning all elements that are not equal to the bot passed in
    const armyFilter=myBotArmy.filter(army => army.id !== bot.id)

    //Updating the state to equal the value of the filtered elements
    setMyBotArmy(armyFilter)
  }

  return (
    <>
      <Army myBotArmy={myBotArmy} removeFromArmy={removeFromArmy}/>
      <BotCollection bots={botCollection} addBotToArmy={addBotToArmy}/>
    </>
  );
}

export default App;
