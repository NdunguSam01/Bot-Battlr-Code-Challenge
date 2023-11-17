import Bot from "./Bot";

const BotCollection = ({bots, addBotToArmy}) => 
{
    const botData=bots.map(bot => 
        {
            let {id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot

            return(
                <Bot key={id} id={id} name={name} health={health} damage={damage} armor={armor} bot_class={bot_class} catchphrase={catchphrase} avatar_url={avatar_url} onClick={()=> addBotToArmy(bot)}/>
            )
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