import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

function NavBar() {
  return (
    <>
      <ul className={styles.navbar}>

        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href='/todos'>
            <a>Todos</a>
          </Link>
        </li>

        <li>
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </li>

        <li>
          <Link href='/products'>
            <a>Products</a>
          </Link>
        </li>

        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default NavBar;