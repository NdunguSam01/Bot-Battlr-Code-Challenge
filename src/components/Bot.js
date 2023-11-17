const Bot = ({name, health, damage, armor, bot_class, catchphrase, avatar_url, onClick=""}) => 
{
    return ( 
        <div className="child-flex" onClick={onClick}>
            <img src={avatar_url} alt={name} />
            <p>Name: {name}</p>
            <p>Health: {health}</p>
            <p>Damage: {damage}</p>
            <p>Armor: {armor}</p>
            <p>Bot Class: {bot_class}</p>
            <p>Catchphrase: {catchphrase}</p>
        </div>
     );
}
 
export default Bot;