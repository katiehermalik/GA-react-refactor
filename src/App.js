import React, { Component } from 'react';
import './App.css';
import './style.css';

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import CommentForm from './CommentForm';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Main />
        <CommentForm />
        <Footer />
      </div>
    );
  }
}

export default App;
