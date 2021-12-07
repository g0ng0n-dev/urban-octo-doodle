import styles from "../../styles/UI.module.css";

const InputNumber = (props) => (
    <div className={styles["input-container"]}>
        <label className={styles["input-label"]} htmlFor={props.htmlFor}>
            {props.label}
        </label>
        <input
            className={styles["input-number-field"]}
            type="number"
            id={props.fieldName}
            name={props.fieldName}
            placeholder={props.placeHolder}
            value={props.value}
            min={props.min}
            max={props.max}
            onChange={props.onChange}
        />
    </div>
);

export default InputNumber;
