import styles from "./SuperheroCard.module.css"

export function SuperheroCard({charac}){
    
    const imageUrl = charac.thumbnail.path +"."+charac.thumbnail.extension;
    console.log(imageUrl);
    return <li className={styles.superheroCard}>
        <img 
            width={230} 
            height={345}
            className="{styles.movieImage}" 
            src={imageUrl} 
            alt={"NoImage"} 
        />
        <div>{charac.name}</div>
        </li>
}