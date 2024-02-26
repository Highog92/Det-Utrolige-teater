import { Outlet } from 'react-router-dom';
import { Navigation } from '../assets/Components/Navigation/Navigation';
import { Footer } from '../assets/Components/Footer/Footer';
import { SearchBar } from '../assets/Components/SearchBar/SearchBar';
export function MainLayout() {

    // Her skal der ligge det som skal vises alle pages
    // Navigationen skal vises på alle sider

    return (
        <>
            <SearchBar />
            <Navigation />
            <Outlet />
            <Footer />
        </>

    )
}