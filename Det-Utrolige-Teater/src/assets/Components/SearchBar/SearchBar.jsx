import search from './SearchBar.module.scss'
import searchIcon from '../../Search.svg'
// import { useFetch } from '../../../Hooks/useFetch'
// import { useState } from 'react'

export function SearchBar() {

    // const [posts, setPost] = useState([])
    // const [searchResult, setSearchResult] = useState([])

    // const searching = useFetch(`http://localhost:3000/events/search/${id}`)
    // const search = useFetch(`http://localhost:3000/events?attributes=image,price,startdate,stopdate,title`)

    // const handleSearchChange = (item) => {
    //     if (!else.target.value) return setSearchResult(posts)
 
    //     const resultsArray = posts.filter(post=> post.title.includes(item.target.value || post.body.includes(item.target.value)))

    //     setSearchResult(searchArray)
    // }


    // const content = ""
    return (
        <>
            {/* {search?.map((item, index) => {
                return (
                    <section>

                        {content}
                    </section>
                )
            })}
 */}

            <div className={search.SearchBar}>
                <input type="text" placeholder='Indtast søgeord' />
                <img src={searchIcon} alt="search" />
            </div>




        </>
    )
}










