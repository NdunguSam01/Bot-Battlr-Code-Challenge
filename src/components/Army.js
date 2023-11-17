import Bot from "./Bot"

const Army = ({myBotArmy}) => 
{
    const botData=myBotArmy.map(bot=>
    {
        let {id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot
        
        return(
            <Bot key={id} id={id} name={name} health={health} damage={damage} armor={armor} bot_class={bot_class} catchphrase={catchphrase} avatar_url={avatar_url}/>
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