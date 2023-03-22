import '../styles/Error.scss';

const ErrorSection = ({nameFiltered}) => {
    if (nameFiltered.length === 0){
        return  (
            <p className='error'>No hay personajes que coincidan con este nombre</p>)
    }else{
        return(
            <p> </p>
        )
    }
  
};

export default ErrorSection;