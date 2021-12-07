import React from "react";
import styles from "../../styles/Article.module.css";

const ArticleParagraph = ({ text }) => {
  return <div className={styles["article__text"]}>{text}</div>;
};

export default ArticleParagraph;
