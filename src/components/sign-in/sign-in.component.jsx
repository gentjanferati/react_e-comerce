import React from 'react';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const{value, name} = event.target;
        this.setState({[name]: value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>Un kam tashme nje account</h2>
                <span>bej login me email dhe fjalkalim</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label="email"
                    required
                    />
                    
                    <FormInput name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label="password"
                    required
                    />
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{''}Sign In With Google{''}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;