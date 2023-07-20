import { SuperherosGrid } from "./SuperheroGrid";
import styles from "./App.module.css"



export function App(){

    return(
        <div>
            <header>
                <h1 className={styles.title}>Superheros</h1>
            </header>
            <main>
                <SuperherosGrid/>
            </main>



        </div>
    )
}