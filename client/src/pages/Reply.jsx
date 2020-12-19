import React, { useState } from 'react';
import axios from 'axios';


const Reply = () => {
    const [reply, setReply] = useState('');


    const changeOnClick = e => {
        e.preventDefault();

        const blogs = {
            reply
        };

        setReply('');
    
    axios
        .post('http://localhost:8080/api/blogs/add/reply', blogs)
        
        .then(res => console.log(res.data))
        .catch(err => {
            console.log(err);
            console.log('IS THIS WORKING???');
        })
    };

    return (
                <div className='container'>
                    <h3>Reply to a Post</h3>
                    <form onSubmit={changeOnClick} encType='multipart/form-data'>
                        <div className='form-group'>
                            <label htmlFor='reply'>Reply to Post</label>
                                <textarea
                                value={reply}
                                onChange={e => setReply(e.target.value)}
                                className='form-control'
                                placeholder='Write your Response.'
                                rows='5'>
                                </textarea>
                        </div>
                            <button type='submit' className='btn-btn-primary'>
                                Post Reply
                            </button>
                    </form>
                </div>
            

    );
};
        
            



export default Reply;