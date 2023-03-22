const Form = ({handleFilterHouse}) => {

    const handleChange = (ev) =>{
        handleFilterHouse(ev.target.value);
    };


    return(
        <form>
            <label htmlFor=""> Casa:
                <select name="" id="" onChange={handleChange}>
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