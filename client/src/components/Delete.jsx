import React, { useState } from 'react';
import Axios from 'axios';



const Delete = ( props ) => {
    const [blog, setBlog] = useState([]);

    const deletePost = id => {
        Axios.delete(`/api/blogs/${id}`)
        .then(res => alert(res.data));
        setBlog(blog.filter(elem => elem._id !== id));
    }

}




export default Delete;