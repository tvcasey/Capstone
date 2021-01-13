import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {  
            firstName: "",
            lastName: "",
             email: "",
            password: ""

        }
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    changeFirstName(event) {
        this.setState({
            firstName: event.target.value
        });

    }
    changeLastName(event) {
        this.setState({
            lastName: event.target.value
        });

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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:8080/api/users/signup', users)
            .then(response => console.log(response.data))
    
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
        }

    // handleSubmit(event) {
    //     const {
    //         firstName,
    //         lastName,
    //         email,
    //         password
    //     } = this.state; 


    //     axios.post('http://localhost:8080/api/users/signup', {
    //         user: {
    //             firstName: firstName,
    //             lastName: lastName, 
    //             email: email,
    //             password: password
                
    //         }
    //     }, //{ withCredentials: true }
    //     ).then(response => {
    //         console.log('signup response after the post', response);
    //     })
    //     .catch(error => {
    //         console.log('signup error', error);
    //     });
    //     event.preventDefault();
    // }   

    render() {
    return (
        <div className='container'>
        <Form onSubmit={this.onSubmit} className='row-6-md'>
            <Label><h4>SIGN UP</h4></Label>
            <FormGroup>
                <Label for='exampleFirstName'><h4>First Name</h4></Label>
                <Input type='text' 
                       name='firstName' 
                       placeholder='Please enter your first name.' 
                       value={this.state.firstName} 
                       onChange={this.changeFirstName} 
                       />
            </FormGroup>
            <FormGroup>
                <Label for='exampleLastName'><h4>Last Name</h4></Label>
                <Input type='text' 
                       name='lastName' 
                       placeholder='Please enter your last name.' 
                       value={this.state.lastName} 
                       onChange={this.changeLastName} 
                       />    
            </FormGroup>
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
            <Button type='Submit'>Submit</Button>
        </Form>
        </div>

    )
    }
}









