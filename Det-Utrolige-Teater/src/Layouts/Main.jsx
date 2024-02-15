import { Outlet } from 'react-router-dom';
import { Navigation } from '../assets/Components/Navigation/Navigation';
export function MainLayout() {

    // Her skal der ligge det som skal vises alle pages
    // Navigationen skal vises på alle sider

    return (
        <>
            <Navigation />
            <Outlet />
        </>

    )
}