import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reply from './Reply';
import './Pages.css';
import { Link } from 'react-router-dom';
import FinancialStatements from './FinancialStatements';
//import Delete from '../components/Delete';
//import './Reply';


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
            <div className='flexbox-container'>
                <div style={{height: '0px', width: '700px'}}>
                <FinancialStatements/>
                {/* <Delete/> */}
                </div>
                {posts.map((blogs, key) => (
                    <div className='row justify-content-end' key={key}>
                        <div className='col-sm-4'>
                        <h4>{blogs.name}</h4>
                        <span>{blogs.title}</span>
                        <p>{blogs.entry}</p>
                        <p>{blogs.reply}</p>                    
                        {/* <div className='col-sm-2'>
                            <div className='test'>
                                
                                <Link path='/AddPost' className='btn btn-outline-success'>
                                    Reply to Post
                                </Link>
                            </div>
                            <div className='col-sm-2'>
                                <Link path='/AddPost' className='btn btn-outline-primary'>
                                    Add New Post
                                </Link>
                            </div>
                            <div className='col-sm-2'>
                                <Link path='Delete' className='btn btn-outline-danger'>
                                    Delete Post
                                </Link>
                            </div>
                            
                        </div> */}
                        </div>
                    </div>
                ))}
            </div>
            );
                };    
                

export default Blogdisplay;