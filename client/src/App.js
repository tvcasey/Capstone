import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
//import { Button } from 'reactstrap';
import Blogdisplay from './components/Blogdisplay';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/blogs')
      .then(res => setPosts(res.data))
      .catch(error => console.log(error));
  });
  return (
    <div className="App">
      <h1>This begins an amazing journey.</h1>
      {console.log(posts)}
  <Route to= '/' component={posts} />
    </div>
  );
}

export default App;
