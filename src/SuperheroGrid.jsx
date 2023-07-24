import { SuperheroCard } from './SuperheroCard';
import styles from './SuperheroGrid.module.css'
import { useState,useEffect } from 'react'



export function SuperherosGrid({search}) {

    const [characters,setCharacter] = useState();


    const [direccion,setDireccion] = useState('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=cap&ts=1&apikey=096c33758d6f141438f2c281bbc0ff92&hash=43aea6772a76e93dcf3455b91aa63bf4');


    console.log(direccion);

    useEffect(()=>{

        fetch(direccion)
        .then(res => res.json())
        .then(character=>setCharacter(character.data.results))
        .catch((err)=>console.log(err));

        setDireccion(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=096c33758d6f141438f2c281bbc0ff92&hash=43aea6772a76e93dcf3455b91aa63bf4`)

        },[search]);
    console.log(characters);
    //characters.sort(() => Math.random() - 0.5);

    return(
    <ul className={styles.superheroGrid}>
        {characters.map((character) => (
            <SuperheroCard key={character.id} charac={character} />
        ))}
    </ul>
    );
}