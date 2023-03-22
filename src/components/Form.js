const Form = ({handleFilterHouse, handleFilterName}) => {

    const handleChangeHouse = (ev) =>{
        handleFilterHouse(ev.target.value);
    };

    const handleChangeText =(ev) =>{
        handleFilterName(ev.target.value);
    }

    return(
        <form>
            <label htmlFor="">Escribe un nombre:<input type="text" onChange={handleChangeText}/></label>
            <label htmlFor=""> Escoge la casa:
                <select name="" id="" onChange={handleChangeHouse}>
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