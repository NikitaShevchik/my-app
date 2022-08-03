import React, { useState, useRef } from 'react';
// import Counter from './components/counter';
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import './styles/App.css';

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

  const [post, setPost] = useState({ title: '', body: '' });
  // const [body, setBody] = useState('');
  // const bodyInputRef = useRef()

  function addNewPost(e) {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: '', body: '' });
    // setBody('');
    // console.log(bodyInputRef.current.value)
  }

  // function setInput() {
  //   let input = document.querySelector('.AppInput');
  //   setValue(input.value)
  // }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        {/* Неуправляемый\ Неконтролируемый компонент */}
        <MyInput
          // ref={bodyInputRef}
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Языки программирования (МИР)' />
      <PostList posts={posts2} title='Языки программирования (СНГ)' />
    </div>
  );
}

export default App;

