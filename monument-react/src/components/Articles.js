import React from 'react'

const Articles = (props) => {
  return (
    <article className="col-third">
      <img src={props.article.imageURL} alt=""/>
      <div>
        <h3>{props.article.title}</h3>
        <p>{props.article.content}</p>
        <button>Read More</button>
      </div>
    </article>
  );
};

export default Articles;