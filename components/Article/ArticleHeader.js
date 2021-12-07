import React from "react";
import moment from "moment";
import styles from "../../styles/Article.module.css";

const ArticleHeader = ({ docType, source, date }) => {
  return (
    <div className={styles["article__header"]}>
      <div className={styles["article__header-column"]}>
        <span>
          <strong>{docType.toUpperCase()}</strong>
        </span>
        <span>
          <small>Published:&nbsp;{moment(date).format("DD-MM-YYYY")}</small>
        </span>
      </div>
      <span>{source}</span>
    </div>
  );
};

export default ArticleHeader;
