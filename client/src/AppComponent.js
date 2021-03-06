/* eslint-disable no-useless-constructor */
import { Component } from  'react';
import UserContext from './Context'

class AppComponent extends Component{
    constructor(props){
        super(props)

        this.state= {
            loggedIn:false,
            user:null
        }
    }

    logIn = (user) =>{
        this.setState({
            loggedIn:true,
            user
        })
    }
    logOut = (user) =>{
        this.setState({
            loggedIn:false,
            user:null
        })
    }
    
    render(){
        const{ loggedIn, user}= this.state
        return (
            <UserContext.Provider value={{
                loggedIn,
                user,
                logIn:this.logIn,
                logOut:this.logOut
            }}>
           { this.props.children}
           </UserContext.Provider>
        )
    }

}

export default AppComponent;