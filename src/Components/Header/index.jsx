import styles from "./Header.module.css"

import { Link } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";


function Header(){
    return(
        <header className={styles.header}>
            <Link to="/"><img src={logo} alt="" /></Link>
            <hr/>
           <nav>
                
                <Link to="/">
                    <span className={styles.numbers}>00</span>
                    <span className={styles.text}>Home</span>
                </Link>
                <Link>
                    <span className={styles.numbers}>01</span>
                    <span className={styles.text}>Destination</span>
                </Link>
                <Link>
                    <span className={styles.numbers}>02</span>
                    <span className={styles.text}>Crew</span>
                </Link>
                <Link>
                    <span className={styles.numbers}>03</span>
                    <span className={styles.text}>Technology</span>
                </Link>
           </nav>
        </header>
    );
}

export default Header;