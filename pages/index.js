import React, { useEffect, useState } from "react";
import moment from "moment";
import Filters from "../components/Filters";
import Article from "../components/Article";
import styles from "../styles/Home.module.css";
import axios from "axios";

export async function getServerSideProps(context) {
  let articles = [];

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_NYTIMES_API_INITIAL_URL}`
    );
    articles = response.data.response.docs;
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      articles: articles,
    },
  };
}

export default function Home(props) {

  const [articles, setArticles] = useState(props.articles);


  return (
      <main className={styles["container"]}>
        <Filters setArticles={setArticles} />
        <div className={styles["app__content"]}>
          {articles.length === 0 ? (
                  <div>
                      {"We couldn't found Articles"}
                  </div>
              ) :
              articles.map((article, newIndex) => {
            return <Article key={newIndex + article._id} article={article} />;
          })}
        </div>
      </main>
  );
}
