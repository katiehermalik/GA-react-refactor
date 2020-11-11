
const Articles = (props) => {
  return (
    <article className="col-third">
      <img src={props.article.imageURL} alt={props.article.issueTopic}/>
      <div>
        <h3>
        {props.article.issue} &mdash; {props.article.issueTopic}
        </h3>
        <p>{props.article.content}</p>
        <button>Read More</button>
      </div>
    </article>
  );
};

export default Articles;