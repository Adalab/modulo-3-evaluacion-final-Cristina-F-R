import placeholder from '../images/H.png';
import { Link } from 'react-router-dom';
import '../styles/Card.scss';

function Card ({eachCharacter}) {


    return(
        <>
            <li className='card'>
                <Link to={`/character/${eachCharacter.id}`} className="card_link">
                    <div className='card_link_imgContainer'>
                        <img 
                        src={eachCharacter.image || placeholder}
                        alt='Foto de personaje'
                        className="card_link_imgContainer_img" 
                        title="Fotografia del personaje"/>
                    </div>
                    <h2 className="card_link_name">{eachCharacter.name}</h2>
                    <p className="card_link_specie">{eachCharacter.specie}</p>
                </Link>
            </li>
        </>
        
    )
}

export default Card;