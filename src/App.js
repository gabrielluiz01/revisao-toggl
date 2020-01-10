import React, { Component } from 'react';
import Login from './components/Login/login'
import Signup from './components/Signup/signup'
import Timer from './components/Timer/timer'
import './style.css'

export default class App extends Component {

  state = {
    currentScreen: 'login',
    user:{
      name: '',
      email: '',
      password: '',
    }
  }


  createAccount = (name, email, password) =>{
    this.setState({
      user:{
        name: name,
        email: email,
        password: password,
      },
      currentScreen: 'login'
    })
  
  }

  comparacao = (email, password) => {
    console.log(this.props.email === this.state.user.email)
    console.log(this.props.password === this.state.user.password)
  }




  renderScreen = () => {
    switch(this.state.currentScreen){
      case 'login':
        return <Login handleState={this.handleState} comparacao={this.comparacao}/>
      case 'signup':
        return <Signup handleState={this.handleState} createAccount={this.createAccount}/>
      case 'timer':
        return <Timer handleState={this.handleState} createAccount={this.createAccount}/>
      default: 
        return null;
    }
  }

  handleState = (screen) => {
    this.setState({
      currentScreen: screen,
    })
  }

  render(){
    return (
      <div className="App">
         {this.renderScreen()}
      </div>
    );
  }

}

