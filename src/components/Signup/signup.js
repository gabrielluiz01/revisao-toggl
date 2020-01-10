import React, { Component } from 'react';

export default class Signup extends Component {

    state ={
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        message: '',
    }


    changeName = (ev) =>{
        this.setState({
            name: ev.target.value
        })
        console.log(this.state.name)
    }
    changePassword = (ev) => {
        this.setState({
            password: ev.target.value
        })
    }
    changeConfirmPassword = (ev) =>{
        this.setState({
            confirmPassword: ev.target.value
        })
    }
    changeEmail = (ev) => {
        this.setState({
            email: ev.target.value
        })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()

        if(this.state.password === this.state.confirmPassword){
            this.props.createAccount(this.state.name, this.state.email, this.state.password)
            this.props.handleState('login')
        }else{
            this.setState({
                message: 'Senha errada',
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        }
    }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Name
                <input 
                    value={this.state.name}
                    type="text" 
                    placeholder="Digite seu nome" 
                    autoFocus
                    onChange={this.changeName}
                />
            </label>
            <label>Email
                <input 
                    value={this.state.email}
                    type="email" 
                    placeholder="Digite seu email"
                    onChange={this.changeEmail}
                />
            </label>
            <label>Senha
                <input 
                    value={this.state.password}
                    type="password" 
                    placeholder="Senha"
                    onChange={this.changePassword}
                />
            </label>
            <label>Confirme Senha
                <input 
                    value={this.state.confirmPassword}
                    type="password" 
                    placeholder="Confirme sua Senha"
                    onChange={this.changeConfirmPassword}
                />
            </label>
            <button>Enviar</button>
            <p>{this.state.message}</p>
        </form>
        <button onClick={() => this.props.handleState('login')}>Logar</button>
      </div>
    )
  }
}
