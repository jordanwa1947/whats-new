import React from 'react';
import './NewsArticle.css';

function NewsArticle(props) {
  return (
    <section className="article-card">
      <img src={props.article.img}/>
      <h1>{props.article.headline}</h1>
      <p>{props.article.description}</p>
      <a href={props.article.url}>Full Article</a>
    </section>
  )
}

export default NewsArticle;
