import React, { Component } from 'react';

export default class Timer extends Component {
  render() {
    return(
      <div>
        <button onClick={() => this.props.handleState('login')}>Ir para login</button> 
          
      </div>
    )
  }
}
