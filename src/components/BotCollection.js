const BotCollection = ({bots, addBotToArmy, deleteBot}) => 
{
    const botData=bots.map(bot => 
        {
            let {id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot

            return ( 
                <div key={id} className="child-flex card">
                    <img src={avatar_url} alt={name} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text">Health: {health}</p>
                        <p className="card-text">Damage: {damage}</p>
                        <p className="card-text">Armor: {armor}</p>
                        <p className="card-text">Bot Class: {bot_class}</p>
                        <p className="card-text">Catchphrase: {catchphrase}</p>
                        <div className="buttons">
                            <button className="btn btn-success col-12" onClick={()=>addBotToArmy(bot)}>Add bot to your army</button>
                            <button className="btn btn-danger col-12 mt-2" onClick={()=>deleteBot(bot)}>Release bot from service</button>
                        </div>
                    </div>
                    
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