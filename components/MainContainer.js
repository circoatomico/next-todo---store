import Footer from "./MainFooter";
import NavBar from "./NavBar";

import styles from '../styles/MainContainer.module.css'

function MainContainer({children}) {
  return(
    <>
      <NavBar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  )
}

export default MainContainer;