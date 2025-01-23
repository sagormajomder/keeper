import PropTypes from 'prop-types';
import Button from './Common/Button';

PostingArea.propTypes = {
  onAddPosts: PropTypes.func.isRequired,
  titleInput: PropTypes.string.isRequired,
  textInput: PropTypes.string.isRequired,
  onTitleInput: PropTypes.func.isRequired,
  onTextInput: PropTypes.func.isRequired,
};

function PostingArea({
  onAddPosts,
  titleInput,
  textInput,
  onTitleInput,
  onTextInput,
}) {
  const handleFormSubmit = function (e) {
    e.preventDefault();

    const newPost = {
      id: crypto.randomUUID(),
      title: titleInput,
      text: textInput,
    };

    onAddPosts(newPost);

    onTitleInput('');
    onTextInput('');
  };
  return (
    <section className='posting-area'>
      <h2 className='posting-header'>Write your post here</h2>
      <form className='post-form' onSubmit={handleFormSubmit}>
        <input
          required
          className='title-input'
          type='text'
          placeholder='Enter Post Title'
          value={titleInput}
          onChange={e => onTitleInput(e.target.value)}
        />
        <textarea
          required
          className='text-input'
          value={textInput}
          placeholder='Enter Post Text'
          onChange={e => onTextInput(e.target.value)}
        />

        <div>
          <Button>Post</Button>
        </div>
      </form>
    </section>
  );
}

export default PostingArea;
