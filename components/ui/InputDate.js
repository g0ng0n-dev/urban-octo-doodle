import styles from "../../styles/UI.module.css";
import moment from "moment";

const InputDate = (props) => (
    <div className={styles["input-container"]}>
        <label className={styles["input-label"]} htmlFor={props.htmlFor}>
            {props.label}
        </label>
        <input
            className={styles["input-field"]}
            type="date"
            id={props.fieldName}
            name={props.fieldName}
            value={moment(props.value).format("YYYY-MM-DD")}
            onChange={props.onChange}
        />
    </div>
);

export default InputDate;
