import React, { Component } from 'react';
import './style.css'

export default class Login extends Component {

  state={
    email: '',
    password: '',
  }

  changeEmail = (ev) => {
    this.setState({
      email: ev.target.value
    })
  }

  changePassword = (ev) => {
    this.setState({
      email: ev.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.comparacao(this.state.email, this.state.password)
  }

  render() {
    return(

      <div className="block-login">
        <form onSubmit={this.handleSubmit} className="login-form">
          <label>Email
            <input 
              type="email" 
              placeholder="Digite seu email" 
              autoFocus
              onChange={this.changeEmail}
            />
          </label>
          <label>Senha
            <input 
              type="password" 
              placeholder="Senha"
              onChange={this.changePassword}
            />
          </label>
          <button>Logar</button>
        </form>        
        <button onClick={() => this.props.handleState('signup')}>Cadastre-se</button>
      </div>
    )
  }
}
