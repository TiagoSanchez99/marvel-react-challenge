import { SuperheroCard } from './SuperheroCard';
import styles from './SuperheroGrid.module.css'
import { useState,useEffect } from 'react'



export function SuperherosGrid(data) {

    const [characters,setCharacter] = useState();
   


    useEffect(()=>{

        fetch('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spi&ts=1&apikey=096c33758d6f141438f2c281bbc0ff92&hash=43aea6772a76e93dcf3455b91aa63bf4')
        .then(res => res.json())
        .then(character=>setCharacter(character.data.results))
        .catch((err)=>console.log(err));
        },[]);
    console.log(characters);
    characters.sort(() => Math.random() - 0.5);

    return(
    <ul className={styles.superheroGrid}>
        {characters.map((character) => (
            <SuperheroCard key={character.id} charac={character} />
        ))}
    </ul>
    );
}