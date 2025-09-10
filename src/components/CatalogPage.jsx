import { useState } from "react";
import Nav from './Nav';
import Catalog from './Catalog'
import styles from '../app/page.module.css'

export default function CatalogPage({ titles }) {
    const statuses = ["Home", ...new Set(titles.map(t => t.status))];

    const genres = [
        "Romance",
        "Slice of Life",
        "Sci Fi",
        "Horror",
        "Comedy",
        "Adventure",
        "Action",
        "Drama",
        "Fantasy"
    ]
    
    const [ selectedStatus, setSelectedStatus ] = useState('Home');
    const [ selectedGenre, setSelectedGenre ] = useState(null);

    const filteredTitles = titles.filter(t => {
        const statusMatch = 
            selectedStatus && selectedStatus !== "Home"
            ? t.status === selectedStatus
            : true;
            
        const genreMatch = 
            selectedGenre && selectedGenre !== "Home"
            ? Array.isArray(t.genre)
                ? t.genre.includes(selectedGenre)
                : t.genre === selectedGenre : true;

        return statusMatch && genreMatch;
    })

    return (
        <>  
            <div className={styles.mainContainer}
>
                <Nav 
                    items={statuses} 
                    className={styles.mainCategory}
                    activeItem={selectedStatus}
                    type= "status"
                    onItemClick={(status) => {
                        if (status === "Home") {
                            setSelectedStatus("Home");
                            setSelectedGenre(null);
                        } else {
                        setSelectedStatus(status)
                        }
                    }
                
                }
                />
            </div>
         
            <Nav
                items={genres}
                className={styles.subContainer}
                onItemClick={setSelectedGenre}
                activeItem={selectedGenre}
                type="genre"
            />

            <Catalog titles={filteredTitles} className={styles.homecatalog}/>
        </>
    )
}