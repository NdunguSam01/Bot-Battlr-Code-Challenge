const BotCollection = ({bots, addBotToArmy, deleteBot}) => 
{
    const botData=bots.map(bot => 
        {
            let {id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot

            return ( 
                <div key={id} className="child-flex">
                    <img src={avatar_url} alt={name} />
                    <p>Name: {name}</p>
                    <p>Health: {health}</p>
                    <p>Damage: {damage}</p>
                    <p>Armor: {armor}</p>
                    <p>Bot Class: {bot_class}</p>
                    <p>Catchphrase: {catchphrase}</p>
                    <button onClick={()=>addBotToArmy(bot)}>Add bot to army</button>
                    <button className="deleteBtn" title="Click to delete bot" onClick={()=>deleteBot(bot)}>X</button>
                </div>
             );
        })
    return (  
       <>
        <h1>Bot Collection</h1>
        <div className="parent-flex">
            {botData}
        </div>
       </>
    );
}
 
export default BotCollection;