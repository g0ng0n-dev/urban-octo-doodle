import React from "react";
import ArticleHeader from "./ArticleHeader";
import ArticleHeadline from "./ArticleHeadline";
import ArticleParagraph from "./ArticleParagraph";
import styles from "../../styles/Article.module.css";

const Article = ({ article }) => {
  let img = article.multimedia.find(
    (item) => item.subtype === "largeHorizontal375"
  );

  return (
    <div className={styles["article"]}>
      <ArticleHeader
        date={article.pub_date}
        docType={article.document_type}
        source={article.source}
      />
      <ArticleHeadline title={article.headline.main} image={img} />
      <ArticleParagraph text={article.lead_paragraph} />
    </div>
  );
};

export default Article;
