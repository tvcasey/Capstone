import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';
import Blogdisplay from '../pages/Blogdisplay';


const Delete = ( props ) => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {

    const deletePost = _id => {
        Axios.delete(`http://localhost:8080/api/blogs/${_id}`)
        .then(res => alert(res.data));
        setBlog(blog.filter(elem => elem._id !== _id));
    }
    },    []);
    return (
        <div className='col-sm-2'>
                                
            {/* <button
                onClick={() => setBlog(blog.id)}
                className='btn btn-outline-danger'>
                Delete Post
            </button> */}
        <Route
                path='../pages/Blogdisplay'
                render={(props) => (
                    <Blogdisplay {...props} isAuthed={true} />
                )}
        />
        </div>
    )
}




export default Delete;