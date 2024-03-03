import search from './SearchBar.module.scss'
import searchIcon from '../../Search.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function SearchBar() {


    const [searchResult, setSearchResult] = useState([])

    console.log(searchResult);

    return (
        <>
            <search className={search.SearchBar}>
                <input type="search" placeholder='Indtast søgeord' onChange={(events) => setSearchResult(events.target.value)} />
                <Link to={`/searchPage/${searchResult}`}>
                    <img src={searchIcon} alt="search" />
                </Link>
            </search>
        </>
    )
}










