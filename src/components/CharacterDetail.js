import {Link, useParams} from 'react-router-dom';
import placeholder from '../images/H.png';
import heart from '../images/heart.png';
import skull from '../images/skull.png';
import gryffindor from '../images/gryffindor.png';
import hufflepuff from '../images/hufflepuff.png';
import ravenclaw from '../images/ravenclaw.png';
import slytherin from '../images/slytherin.png';
import '../styles/CharacterDetail.scss';



const CharacterDetail = ({findCharacter}) =>{

    const params = useParams();
    const charactersFound = findCharacter(params.id);
    console.log(charactersFound)

    const houseImg = {
        gryffindor: gryffindor,
        hufflepuff: hufflepuff,
        ravenclaw: ravenclaw,
        slytherin: slytherin,
    }
    
    return(
        <div >
            <Link to="/">
            <p className="carddetail_nav">Volver a Inicio</p>
            </Link>
            <div className='carddetail'>
                <div className='carddetail_imgContainer'>
                            <img 
                            src={charactersFound.image || placeholder}
                            alt='Foto de personaje'
                            className="carddetail_imgContainer_img" 
                            title="Fotografia del personaje"/>
                </div>
                <div>
                    <h2 className="carddetail_name">Nombre: {charactersFound.name}</h2>
                    <p className="carddetail_specie">Especie: {charactersFound.specie}</p>
                    <p className="carddetail_gender">Género: {charactersFound.gender}</p>
                    <div className="carddetail_alive">Estado: {charactersFound.alive ? 
                        <div className='carddetail_divternario'>
                            <p className='carddetail_divternario_text'>'Vivo/a'</p>
                            <img 
                                    src={heart}
                                    alt='corazón'
                                    className='carddetail_divternario_icon'
                                    title="corazón"/>
                        </div> 
                        : 
                        <div className='carddetail_divternario'>
                            <p className='carddetail_divternario_text'>'Muerta/o'</p>
                            <img 
                                src={skull}
                                alt='skull'
                                className='carddetail_divternario_icon'
                                title="skull"/>
                                </div>
                                }
                    </div>
                    <div className='carddetail_divHouse'>
                        <p className="carddetail_divHouse_text">Casa: {charactersFound.house}</p> 
                        <img className='carddetail_divHouse_img' src={houseImg[charactersFound.house.toLowerCase()]} alt={charactersFound.house}/>
                    </div>
                </div>
            </div>
         </div> 

       
    )

}

export default CharacterDetail;