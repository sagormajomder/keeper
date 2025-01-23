import { useState } from 'react';
import Header from './Header';
import PostingArea from './PostingArea';
import FeedArea from './PostList/FeedArea';

const InitialPost = [
  {
    id: crypto.randomUUID(),
    title: 'Hello World!',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
  },
  {
    id: crypto.randomUUID(),
    title: 'Today is a great day',
    text: 'It is a sample text',
  },
];

function SocialMedia() {
  const [posts, setPosts] = useState(InitialPost);

  const [titleInput, setTitleInput] = useState('');
  const [textInput, setTextInput] = useState('');

  const handleAddPosts = function (newPost) {
    setPosts(oldPosts => [...oldPosts, newPost]);
  };

  const handleDeletePosts = function (id) {
    setPosts(posts => posts.filter(post => post.id !== id));
  };

  const handleModifyPost = function (id) {
    posts.forEach(post => {
      if (post.id === id) {
        handleDeletePosts(id);
        setTitleInput(post.title);
        setTextInput(post.text);
      }
    });
  };

  return (
    <div className='social-app'>
      <Header />
      <main className='social-app-body'>
        <PostingArea
          onAddPosts={handleAddPosts}
          titleInput={titleInput}
          textInput={textInput}
          onTitleInput={setTitleInput}
          onTextInput={setTextInput}
        />
        <FeedArea
          posts={posts}
          onDeletePosts={handleDeletePosts}
          onModifyPost={handleModifyPost}
        />
      </main>
    </div>
  );
}

export default SocialMedia;
