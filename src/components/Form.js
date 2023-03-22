import '../styles/Form.scss';

const Form = ({handleFilterHouse, handleFilterName, nameFilter, houseFilter, handleOnSubmit}) => {

    const handleChangeHouse = (ev) =>{
        ev.preventDefault();
        handleFilterHouse(ev.target.value);
    };

    const handleChangeText =(ev) =>{
        ev.preventDefault();
        handleFilterName(ev.target.value);
    }


    return(
        <form onSubmit={handleOnSubmit} className='form'>
            <label htmlFor="name" className='form_label'>
                Escribe un nombre:
            <   input type="text" onChange={handleChangeText} value={nameFilter} id='name' name='name' className='form_label_input'/>
            </label>
            <label htmlFor="house" className='form_label'> 
                Escoge la casa:
                <select name="" id="house" onChange={handleChangeHouse} value={houseFilter} className='form_label_input'>
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