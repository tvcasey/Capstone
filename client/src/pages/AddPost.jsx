import React, { useState } from 'react';
import axios from 'axios';


const AddPost = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [entry, setEntry] = useState('');
    const [reply, setReply] = useState('');

    const changeOnClick = e => {
        e.preventDefault();

        const blogs = {
            name,
            title,
            entry,
            reply,
        };

        setName('');
        setTitle('');
        setEntry('');
        setReply('');
    
    axios
        .post('http://localhost:8080/api/blogs/add', blogs)
        .then(res => console.log(res.data))
        .catch(err => {
            console.log(err);
        })
    };

    return (
        <div className='container'>
            <h3>Add a Post</h3>
            <form onSubmit={changeOnClick} encType='multipart/form-data'>
                <div className='form-group'>
                    <label htmlFor='name'>Author Name</label>
                    <input
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='form-control'
                        placeholder='Enter Your Name or Entity.'/>        
                </div>
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className='form-control'
                        placeholder='Add or Revise a Title'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='entry'>Post</label>
                    <textarea
                        value={entry}
                        onChange={e => setEntry(e.target.value)}
                        className='form-control'
                        placeholder='Enter Your Statement.'
                        rows='5'>
                    </textarea>
                </div>
                    <button type='submit' className='btn-btn-primary'>
                        Post Entry
                    </button>
                <div className='form-group'>
                    <label htmlFor='reply'><h3>Reply to Post</h3></label>
                        <textarea
                        value={reply}
                        onChange={e => setReply(e.target.value)}
                        className='form-control'
                        placeholder='Write your Reply.'
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

export default AddPost;