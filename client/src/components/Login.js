/* eslint-disable no-useless-constructor */
import * as ReactBootStrap from "react-bootstrap";
import { Component} from 'react';
import Input from './Input'

class Login extends Component {
   constructor(props){
     super(props)

     this.state={
       username: '',
       password: '',
       usernameError: false,
       passwordError:false,
      

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
  
   hendleSubmit =(event)=>{
     event.preventDefault();
    const {
      username,
      password,
      usernameError,
      passwordError
    }=this.state

    if(usernameError || passwordError ){
      console.log("There is an error")
      return
    }
      
    fetch("http://localhost:5000/api/auth/login",{
      method:'POST',
      body:JSON.stringify({
        username,
        password}),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(promise=>{
      console.log(promise);
      return promise.json()
    }).then(data=>{
      console.log(data);
    })

    // this.props.history.push('/')
   }

   handleBlur=()=>{
     if (this.state.username.length < 0){
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
  

  
  render(){
     
       const{ username,
              password,
              usernameError,
              passwordError,
               } = this.state
  return (
    <ReactBootStrap.Container>
      <h1>Login</h1>
    <ReactBootStrap.Form onSubmit={this.hendleSubmit} className="w-50 p-3"> 
    
    <Input 
        
          id="username" 
          label="Username" 
          type="text" 
          value={username} 
          placeholder="Enter your username..."
          onBlur={this.handleBlur} 
          onChange={this.changeUsername}/>
          {usernameError ? <div>Username is empty!</div> : null}
    <Input 
         
          id="password" 
          label="Password" 
          type="password" 
          value={password} 
          placeholder="Enter your Password..." 
          onChange={this.changePassword}
          onBlur={this.handleBlurPassword}/>
          {passwordError ? <div>Your password should have at least 6 charecters!</div> : null} 
    
      <ReactBootStrap.Button variant="primary" type="submit">
          Login
      </ReactBootStrap.Button>
    </ReactBootStrap.Form>
    </ReactBootStrap.Container>
  )}
};
export default Login;
