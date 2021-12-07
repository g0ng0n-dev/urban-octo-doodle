import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = (props) => {
    return (

        <header>
            <div className={styles["header"]}>
                <Image src="/NewYorkTimes.svg" alt="NYtimes Logo" width={350} height={54} />
                <span>Articles Filter</span>
            </div>
        </header>
    )
}

export default Header;
