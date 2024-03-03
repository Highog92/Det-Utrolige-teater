import { useParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"
import searchPageStyle from './Styles/searchPageStyle.module.scss'
import { SearchCard } from "../assets/Components/SearchCard/SearchCard";

export function SearchPage() {

    // Slug 
    const { searchWord } = useParams()

    const searchResult = useFetch(`http://localhost:3000/events/search/${searchWord}`)
    console.log(searchResult);

    return (

        <>
            <section className={searchPageStyle.searchResult}>
                {(!searchResult || searchResult.length === 0) ? (
                    <p>Vi fandt ikke noget på {searchWord}</p>
                ) : (
                    searchResult.map((item) => (
                        <SearchCard
                            key={item.id}
                            startDate={item.startdate}
                            stopDate={item.stopdate}
                            stage={item.stage.name}
                            title={item.title}
                            genre={item.genre.name}
                        />
                    ))
                )}
            </section>
        </>
    )

}