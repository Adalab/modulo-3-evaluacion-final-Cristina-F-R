const Form = ({handleFilterHouse, handleFilterName, nameFilter, houseFilter}) => {

    const handleChangeHouse = (ev) =>{
        ev.preventDefault();
        handleFilterHouse(ev.target.value);
    };

    const handleChangeText =(ev) =>{
        ev.preventDefault();
        handleFilterName(ev.target.value);
    }

    return(
        <form>
            <label htmlFor="">Escribe un nombre:<input type="text" onChange={handleChangeText} value={nameFilter}/></label>
            <label htmlFor=""> Escoge la casa:
                <select name="" id="" onChange={handleChangeHouse} value={houseFilter}>
                    <option value="gryffindor">Gryffindor</option>
                    <option value="slytherin">Slytherin</option>
                    <option value="ravenclaw">Ravenclaw</option>
                    <option value="hufflepuff">Hufflepuff</option>
                </select>
            </label>
            
        </form>
    )
}

export default Form;