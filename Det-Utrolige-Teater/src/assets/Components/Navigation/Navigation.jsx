import navStyle from './Navigation.module.scss'
import logo from '../../../assets/Logo.svg'
import { Link } from 'react-router-dom';
export function Navigation() {

    return (
        <section className={navStyle.navigation}>
            <nav>
                {/* Link er bare et <a> tag */}
                <Link to='/homepage'><img src={logo} alt="Det utrolige teater" /></Link>
                <ul>
                    <Link to='/homepage'><li>FORSIDE</li></Link>
                    <Link to='/showsevents'><li>FORESTILLINGER & EVENTS</li></Link>
                    <Link to='/actors'><li>SKUESPILLER</li></Link>
                    <Link to='/login'><li>LOGIN</li></Link>
                    <Link to='/signup'><li>SIGNUP</li></Link>
                </ul>
            </nav>
        </section>
    )
}