
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'

function NavBar()
{
  return (
    <ul className={styles.flex}>
        <li>
            <NavLink to='/' className={({ isActive }) => ( isActive ? 'active' : '' )}>Home page</NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About page</NavLink>
        </li>
        <li>
            <NavLink to='/news' className={({ isActive }) => (isActive ? 'active' : '')}>News page</NavLink>
        </li>
        <li>
            <NavLink to='/users' className={({ isActive }) => (isActive ? 'active' : '')}>Users page</NavLink>
        </li>
        <li>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>Contact page</NavLink>
        </li>
    </ul>
  )
}

export default NavBar