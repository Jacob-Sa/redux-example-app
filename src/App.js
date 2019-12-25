import React from 'react';
import logo from './logo.svg';
import Posts from './components/Posts';
import PostsForm from './components/PostForm';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <PostsForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
