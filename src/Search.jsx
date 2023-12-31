import styles from "./Search.module.css";
import {FaSearch} from "react-icons/fa";
import { useState } from "react";
import { SuperherosGrid } from "./SuperheroGrid";

export function Search(){

    const [searchText , setsearchText] = useState("");
    
    const ClickSubmit = (e) => {
        e.preventDefault();
        setsearchText(e.target.value.toLowerCase());
        console.log("Búsqueda: "+e.target.value);
    }

    return(
        <>
        <a href="https://marvel.com">
        <img
            src="https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.png"
            alt={"NoImage"}
            className={styles.image}
        />
        </a>

        <form className={styles.search}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={searchText}
                    onChange={ClickSubmit}
                    placeholder="Buscar" />
                <button className={styles.searchButton} type="submit">
                    <FaSearch size={20} />
                </button>
            </div>
        </form>

        <SuperherosGrid search={searchText}/>
        </>
    )
}