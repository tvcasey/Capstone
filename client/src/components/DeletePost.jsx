/*import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';
import Blogdisplay from '../pages/Blogdisplay';


const DeletePost = (id) => {
    const [bluster, setBluster] = useState([]);

//    const EventClick = (e) => {
//        id.preventDefault()

    const DeleteThePost = (postid) => {   
    //useEffect(() => {

    
        Axios.delete(`http://localhost:8080/api/blogs/${id}`)
        .then(res => alert(res.data));
        setBluster(bluster.filter(elem => elem._id !== id));
    
    //    },    [blog.id]);
    }
    return (
        <div className='col-sm-2'>
                                
            <button
                onClick={() => DeleteThePost(bluster._id)}
                className='btn btn-outline-danger'>
                Delete Post
            </button>
        <Route
                path='../pages/Blogdisplay'
                render={(props) => (
                    <Blogdisplay {...props} isAuthed={true} />
                )}
                />
        </div>
    )
}




export default DeletePost;*/