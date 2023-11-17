const BotCollection = ({bots, addBotToArmy}) => 
{
    const botData=bots.map(bot => 
        {
            let {id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot

            return ( 
                <div key={id} className="child-flex" onClick={()=>addBotToArmy(bot)}>
                    <img src={avatar_url} alt={name} />
                    <p>Name: {name}</p>
                    <p>Health: {health}</p>
                    <p>Damage: {damage}</p>
                    <p>Armor: {armor}</p>
                    <p>Bot Class: {bot_class}</p>
                    <p>Catchphrase: {catchphrase}</p>
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