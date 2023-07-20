import { SuperherosGrid } from "./SuperheroGrid";
// import styles from "./App.module.css"
import { Search } from "./Search";



export function App(){

    return(
        <div>
            <header>
                <Search/>
            </header>
            <main>
                <SuperherosGrid/>
            </main>



        </div>
    )
}