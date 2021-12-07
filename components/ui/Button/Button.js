import styles from "../../../styles/UI.module.css";

const Button = ({ disabled = false, text, onClick }) => (
    <div className={styles["button-container"]}>
      <button className={styles["button-style"]} disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
);

export default Button;
