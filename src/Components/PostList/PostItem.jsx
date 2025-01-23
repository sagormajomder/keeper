import PropTypes from 'prop-types';

function PostItem({ title, text, postId, onDeletePosts, onModifyPost }) {
  return (
    <li className='post'>
      <h3 className='post-title'>
        <span>{title}</span>
        <span className='icons'>
          <ion-icon
            onClick={() => onModifyPost(postId)}
            name='create-outline'></ion-icon>
          <ion-icon
            onClick={() => onDeletePosts(postId)}
            name='trash-outline'></ion-icon>
        </span>
      </h3>
      <p className='post-text'>{text}</p>
    </li>
  );
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
  onDeletePosts: PropTypes.func.isRequired,
  onModifyPost: PropTypes.func.isRequired,
};

export default PostItem;
