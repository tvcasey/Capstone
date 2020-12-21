import React, { useState } from 'react';
import Axios from 'axios';



const Delete = ( props ) => {
    const [blog, setBlog] = useState([]);

    const deletePost = id => {
        Axios.delete(`/api/blogs/${id}`)
        .then(res => alert(res.data));
        setBlog(blog.filter(elem => elem._id !== id));
    }
    return (
        <div className='col-sm-2'>
                                
            <button
                onClick={() => setBlog(blog._id)}
                className='btn btn-outline-danger'>
                Delete Post
            </button>
        </div>
    )
}




export default Delete;