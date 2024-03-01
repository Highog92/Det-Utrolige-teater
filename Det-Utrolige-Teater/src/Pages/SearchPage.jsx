import { useParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"
import searchPageStyle from './Styles/searchPageStyle.module.scss'
import { SearchCard } from "../assets/Components/SearchCard/SearchCard";

export function SearchPage() {




    const { slug } = useParams()

    const searchResult = useFetch(`http://localhost:3000/events/search/${slug}`)
    console.log(searchResult);

    return (

        <>
            <section className={searchPageStyle.searchResult}>{searchResult?.map((item) => {
                return (

                    <SearchCard
                        key={item.id}
                        startDate={item.startdate}
                        stopDate={item.stopdate}
                        stage={item.stage.name}
                        title={item.title}
                        genre={item.genre.name} />
                )
            })}
            </section>
        </>
    )
}