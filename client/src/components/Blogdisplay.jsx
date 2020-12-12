import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blogdisplay = ( props ) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      axios
        .get('http://localhost:8080/api/blogs')
        .then(res => setPosts(res.data))
        .catch(error => console.log(error));
  },    []);
        console.log(posts)

    return (
            <div>
                {posts.map((blogs, key) => (
                    <div className='container'>
                        <h2>{blogs.name}</h2>
                        <span>{blogs.title}</span>
                        <p>{blogs.entry}</p>
                        <div className='row my-5'>
                            <div className='col-sm-2'>
                                <a href='' className='btn btn-outline-success'>
                                    Reply to Post
                                </a>
                            </div>
                            <div className='col-sm-2'>
                                <a href='' className='btn btn-outline-danger'>
                                    Delete Post
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            );
                };    
                

    export default Blogdisplay;