function Card ({eachCharacter}) {

    return(
    <li className="card" >
            <img 
            src={eachCharacter.image}
            alt="Foto del personaje" 
            className="card_img" 
            title="Fotografia del personaje"/>
            <h4 className="card_title">{eachCharacter.name}</h4>
            <p className="card_desc">{eachCharacter.specie}</p>
    </li>)
}

export default Card;