import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

function NewsContainer(props) {
   const articleComponents = props.localArticles.map(article => {
     return <NewsArticle key={article.id} article={article} />
   })
  return (
    <section className="new-container">
      {articleComponents}
    </section>
  )
}

export default NewsContainer;
