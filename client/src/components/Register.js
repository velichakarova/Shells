/* eslint-disable no-useless-constructor */
import * as ReactBootStrap from "react-bootstrap";
import { Component} from 'react';
import Input from './Input'

class Register extends Component {
   constructor(props){
     super(props)

     this.state={
       username: '',
       password: '',
       rePassword: '',
       usernameError: false,
       passwordError:false,
       rePasswordError:false,

     }
   }
   changeUsername = (event)=>{
    this.setState({
      username:event.target.value
    })
   }
   changePassword = (event)=>{
    this.setState({
      password:event.target.value
    })
   }
   changeRePassword = (event)=>{
    this.setState({
      rePassword:event.target.value
    })
   }
   hendleSubmit =(event)=>{
     event.preventDefault();
    const {
      username,
      password,
      rePassword,
      usernameError,
      passwordError,
      rePasswordError
    }=this.state

    if(usernameError || passwordError || rePasswordError){
      console.log("There is an error")
      return
    }
      
    fetch("http://localhost:5000/api/auth/register",{
      method:'POST',
      body:JSON.stringify({
        username,
        password, 
        rePassword}),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(promise=>{
      console.log(promise);
      return promise.json()
    }).then(data=>{
      console.log(data);
    })

    this.props.history.push('/login')
   }

   handleBlur=()=>{
     console.log("wikam on Blur");
     if (this.state.username.length < 4){
       console.log(Error);
       this.setState({
         usernameError:true
       })
     }else if(this.state.usernameError){
      this.setState({
        usernameError:false
      })
     }

   }

   handleBlurPassword = ()=>{
     const {password} = this.state
     if(password.length < 6){
       this.setState({
         passwordError:true
       })
     }else if(this.state.passwordError){
      this.setState({
        passwordError:false
      })
     }
   }
   handleBlurRePassword = ()=>{
    const {password, rePassword} = this.state
    if(password !== rePassword){
      this.setState({
        rePasswordError:true
      })
    }else if(this.state.rePasswordError){
     this.setState({
       rePasswordError:false
     })
    }
  }

  
  render(){
     
       const{ username,
              password,
              rePassword,
              usernameError,
              passwordError,
              rePasswordError } = this.state
  return (
    <ReactBootStrap.Container>
      <h1>Register</h1>
    <ReactBootStrap.Form onSubmit={this.hendleSubmit} className="w-50 p-3"> 
    
    <Input 
        
          id="username" 
          label="Username" 
          type="text" 
          value={username} 
          placeholder="Enter your username..."
          onBlur={this.handleBlur} 
          onChange={this.changeUsername}/>
          {usernameError ? <div>Your userneme should have at least 4 charecters!!</div> : null}
    <Input 
         
          id="password" 
          label="Password" 
          type="password" 
          value={password} 
          placeholder="Enter your Password..." 
          onChange={this.changePassword}
          onBlur={this.handleBlurPassword}/>
          {passwordError ? <div>Your password should have at least 6 charecters!!</div> : null} 
    <Input 
          id="rePassword" 
          label="Confirm Password" 
          type="password" 
          value={rePassword} 
          placeholder="Enter your password again..." 
          onChange={this.changeRePassword}
          onBlur={this.handleBlurRePassword} />
          {rePasswordError ? <div>Passwords don`t match!</div> : null}
    
      <ReactBootStrap.Button variant="primary" type="submit">
          Register
      </ReactBootStrap.Button>
    </ReactBootStrap.Form>
    </ReactBootStrap.Container>
  )}
};
export default Register;
