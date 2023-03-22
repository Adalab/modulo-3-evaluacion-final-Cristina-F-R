

const getDataApi = (houseFilter) =>{
    return fetch(`https://hp-api.onrender.com/api/characters/house/${houseFilter}`)
    .then((response) => response.json())
    .then((fetchData) => {
        const cleanData = fetchData.map((eachCharacter=> {
            return {
                id: eachCharacter.id,
                image: eachCharacter.image,
                name: eachCharacter.name,
                specie: eachCharacter.species,
                alive: eachCharacter.alive,
            };
        }))
        return cleanData;
    });
};

export default getDataApi;