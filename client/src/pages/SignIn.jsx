import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



const SignIn = ( props ) => {


    return (
        <div className='container'>
        <Form className='row-6-md'>
            <Label><h4>LOG IN</h4></Label>
            <FormGroup>
                <Label for='exampleEmail'><h4>Email</h4></Label>
                <Input type='email' name='email' id='exampleEmail' placeholder='Please enter your email.' />
            </FormGroup>
            <FormGroup>
                <Label for='examplePassword'><h4>Password</h4></Label>
                <Input type='password' name='password' id='examplePassword' placeholder='Please enter your password.' />    
            </FormGroup>
            <Button>Submit</Button>
        </Form>
        </div>

    )






}




export default SignIn;