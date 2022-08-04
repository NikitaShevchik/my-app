import React, { useState, useRef } from 'react';
// import Counter from './components/counter';
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import './styles/App.css';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript - язык программирования' },
    { id: 2, title: 'Ruby', body: 'Ruby - для прожженных' },
    { id: 3, title: 'Java', body: 'Java - 90 миллиардов устройств' },
    { id: 4, title: 'HTML', body: 'Это наша жизнь' }
  ])

  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Энергетик+', body: 'Наш ответ западу на его Джаву!' },
    { id: 2, title: 'ТехноПрограЯз', body: 'ТехноПрограЯз - для опытных разработчиков' },
    { id: 3, title: 'Верстак++', body: 'Верстак - 90 устройств' },
    { id: 4, title: 'ПодклассникСтиль', body: 'Это наша красота' }
  ])

  // Получаем пост из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  // const [post, setPost] = useState({ title: '', body: '' });

  // const [body, setBody] = useState('');
  // const bodyInputRef = useRef()

  // function setInput() {
  //   let input = document.querySelector('.AppInput');
  //   setValue(input.value)
  // }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      {/* Тернарный оператор! */}
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title='Языки программирования (МИР)' />
        : <h1 style={{ textAlign: 'center', marginTop: '10px' }}>Посты не найдены :(</h1>
      }

      {/* <PostList remove={removePost2} posts={posts2} title='Языки программирования (СНГ)' /> */}
    </div >
  );
}

export default App;

