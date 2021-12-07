import styles from "../../../styles/UI.module.css";

const InputString = (props) => (
  <div className={styles["input-container"]}>
    <label className={styles["input-label"]} htmlFor={props.htmlFor}>
      {props.label}
    </label>
    <input
      className={styles["input-field"]}
      type="string"
      id={props.fieldName}
      name={props.fieldName}
      placeholder={props.placeHolder}
      value={props.value}
      autoComplete="off"
      onChange={props.onChange}
    />
  </div>
);

export default InputString;
