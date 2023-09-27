import {blogPost} from '../../data/blogPosts';
import './blog.scss';

function SingleBlog({blog}: {blog: blogPost}) {
	return (
		<div>
			<article className='card'>
				<h1>{blog.title}</h1>
				<p>
					<b>{blog.author}</b>
				</p>
				<p>{blog.content}</p>
			</article>
		</div>
	);
}

export default SingleBlog;
