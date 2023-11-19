const Army = ({myBotArmy , removeFromArmy}) => 
{
    const botData=myBotArmy.map(bot=>
    {
        let {id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot
        
        return(
            <div key={id} className="child-flex card" onClick={()=> removeFromArmy(bot)}>
                <img src={avatar_url} alt={name} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Health: {health}</p>
                    <p className="card-text">Damage: {damage}</p>
                    <p className="card-text">Armor: {armor}</p>
                    <p className="card-text">Bot Class: {bot_class}</p>
                    <p className="card-text">Catchphrase: {catchphrase}</p>
                </div>
            </div>
        )
        
    })
    return ( 
        <>
            <h1>My Bot Army</h1>
            <div className="parent-flex">
                {botData}
            </div>
        </>
     );
}
 
export default Army;