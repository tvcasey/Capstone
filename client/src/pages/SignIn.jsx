import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {  
            email: "",
            password: ""

        }

        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    changeEmail(event) {
        this.setState({
            email: event.target.value
        });

    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        });

    }
    onSubmit(event) {
        event.preventDefault();

        const users = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:8080/api/users/signin', users)
            .then(response => console.log(response.data))
    
        this.setState({
            email: '',
            password: ''
        })
        }

    render() {
    return (
        <div className='container'>
        <Form onSubmit={this.onSubmit} className='row-6-md'>
            <Label><h4>LOG IN</h4></Label>
            <FormGroup>
                <Label for='exampleEmail'><h4>Email</h4></Label>
                <Input type='email' 
                       name='email' 
                       placeholder='Please enter your email.' 
                       value={this.state.email} 
                       onChange={this.changeEmail} 
                       />
            </FormGroup>
            <FormGroup>
                <Label for='examplePassword'><h4>Password</h4></Label>
                <Input type='password' 
                       name='password' 
                       placeholder='Please enter your password.' 
                       value={this.state.password} 
                       onChange={this.changePassword} 
                       />    
            </FormGroup>
            <Button type='Submit'>Log In</Button>
        </Form>
        </div>

    )
    }
}









