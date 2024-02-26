import search from './SearchBar.module.scss'
import searchIcon from '../../Search.svg'

export function SearchBar() {

    return (
        <>
            <div className={search.SearchBar}>
                <input type="text" placeholder='Indtast søgeord' />
                <img src={searchIcon} alt="search" />
            </div>
        </>
    )
}










