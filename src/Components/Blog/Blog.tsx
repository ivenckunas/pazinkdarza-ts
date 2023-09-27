import blogPostsArr from '../../data/blogPosts';
import SingleBlog from './SingleBlog';

function Blog() {
	return (
		<div className='blog-container'>
			{blogPostsArr.map((blog) => (
				<SingleBlog blog={blog} />
			))}
		</div>
	);
}

export default Blog;
