import React from "react";
import styles from "../../styles/Article.module.css";
import Image from "next/image";

const ArticleHeadline = ({ title, image }) => {
  const myLoader = ({ src }) => {
    return `https://www.nytimes.com/${src}`;
  };

  return (
    <div className={styles["article__top-content"]}>
      <h3>{title}</h3>
      {image && (
        <Image
          loader={myLoader}
          src={image.url}
          alt="Header Image"
          width={500}
          height={500}
        />
      )}
    </div>
  );
};

export default ArticleHeadline;
