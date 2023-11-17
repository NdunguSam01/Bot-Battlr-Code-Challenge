const Army = ({myBotArmy , removeFromArmy}) => 
{
    const botData=myBotArmy.map(bot=>
    {
        let {id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot
        
        return(
            <div key={id} className="child-flex" onClick={()=> removeFromArmy(bot)}>
                <img src={avatar_url} alt={name} />
                <p>Name: {name}</p>
                <p>Health: {health}</p>
                <p>Damage: {damage}</p>
                <p>Armor: {armor}</p>
                <p>Bot Class: {bot_class}</p>
                <p>Catchphrase: {catchphrase}</p>
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