import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reply from './Reply';
import './Pages.css';
import { Link, Route } from 'react-router-dom';
import FinancialStatements from './FinancialStatements';
//import DeletePost from '../components/DeletePost';
//import './Reply';


const Blogdisplay = ( props ) => {
    const [posts, setPosts] = useState([]);
     
    const DeleteThePost = (postid) => {   
        //useEffect(() => {
    
        
        axios.delete(`http://localhost:8080/api/blogs/${postid}`)
        .then(res => alert(res.data));
        //setBluster(bluster.filter(elem => elem._id !== id));
        
        //    },    [blog.id]);
        }

    useEffect(() => {

      axios
        .get('http://localhost:8080/api/blogs')
        .then(res => setPosts(res.data))
        .catch(error => console.log(error));
      
        console.log(posts)
    }, []);
    
    return (
            <div className='flexbox-container'>
                <div style={{height: '0px', width: '500px'}}>
                    {/*<FinancialStatements/>*/}
            
                </div>
                {posts.map((blogs, key) => (
                    <div className='row justify-content-end' key={key}>
                        <div className='col-md-7'>
                        <h4>{blogs.name}</h4>
                        <span>{blogs.title}</span>
                        <p>{blogs.entry}</p>
                        <p>{blogs.reply}</p>                    
                        <div className='col-sm-8'>
                            <div className='test'>                                
                                <Link to='/AddPost' className='btn btn-outline-success'>
                                    Reply to Post
                                </Link>
                            </div>
                            <div className='test'>
                                <Link to='/AddPost' className='btn btn-outline-primary'>
                                    Add New Post
                                </Link>
                            </div>
                            <div>
                                <button
                                onClick={() => DeleteThePost(blogs._id)}
                                className='btn btn-outline-danger'>
                                Delete Post
                                </button>
                            </div>
                                {/*<div className='test'>
                                <Link to='../components/DeletePost' className='btn btn-outline-danger'>                                
                                    Delete Post
                                </Link>
                            </div>*/}                             
                        </div>
                        </div>
                    </div>

                    ))}
            </div>
        
                );
                                                  
    };
        
        

                            
export default Blogdisplay;

