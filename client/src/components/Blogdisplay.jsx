import React, { useState } from 'react';
//import MainContainer from 'react-bootstrap/MainContainer';

const Blogdisplay = ({ posts }) => {
//    const [posts, setPosts] = useState([]);
    return (
        //<MainContainer>
        <div className='jumbotron'>
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
        //</MainContainer>
    );
    };

    export default Blogdisplay;