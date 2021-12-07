import styles from "../../styles/UI.module.css";

const Select = (props) => (
    <div className={styles["input-container"]}>
        <label className={styles["input-label"]} htmlFor={props.htmlFor}>
            {props.label}
        </label>
        <select
            className={styles["input-field"]}
            name={props.fieldName}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
        >
            <option hidden value={""}>
                {props.placeHolder}
            </option>
            {props.values.map(value =>(
                <option
                    key={value}
                    value={value}>
                    {value}
                </option>
                ))
            }
        </select>
    </div>
);

export default Select;
