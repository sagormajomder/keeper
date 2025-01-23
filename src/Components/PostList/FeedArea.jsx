import PropTypes from 'prop-types';
import PostItem from './PostItem';

FeedArea.propTypes = {
  posts: PropTypes.array.isRequired,
  onDeletePosts: PropTypes.func.isRequired,
  onModifyPost: PropTypes.func.isRequired,
};

function FeedArea({ posts, onDeletePosts, onModifyPost }) {
  return (
    <section className='feed-area'>
      <h2 className='feed-header'>Your Posts Here</h2>
      <div className='posts-box'>
        <ul className='feed-container'>
          {posts.map(post => (
            <PostItem
              title={post.title}
              text={post.text}
              key={post.id}
              postId={post.id}
              onDeletePosts={onDeletePosts}
              onModifyPost={onModifyPost}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeedArea;
