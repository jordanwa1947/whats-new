import React from 'react';
import './Menu.css'

function Menu({displayArticles}) {
  return (
    <ul className="article-type-menu">
      <li onClick={ () => displayArticles("local") }>Local News</li>
      <li onClick={ () => displayArticles("technology") }>Technology</li>
      <li onClick={ () => displayArticles("entertainment") }>Entertainment</li>
      <li onClick={ () => displayArticles("science") }>Science</li>
      <li onClick={ () => displayArticles("health") }>Health</li>
    </ul>
  )
}

export default Menu;
