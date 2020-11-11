import posts from '../../SeedData/postData';

const postComponents = posts.map((post, index) => {
  return (
		<div key={index}>
			<h3> {post.date} </h3>
			<h2> {post.title} </h2>
			{post.content.map((content, index) => {
				return (
					<div key={index}>
						<img src={content.image} alt="" />
						<p> {content.paragraph} </p>
					</div>
				);
			})}
		</div>
	);
});


const Post = () => {
  return (
			<article>
				{postComponents}
			</article>
  );
}; 


export default Post;