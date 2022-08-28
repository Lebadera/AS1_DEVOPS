import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React, {Component} from 'react';
import "./App.css"

class Login extends Component{

  constructor(props){
    super(props);

    this.state = {email: '',
    senha: '',
    mensagem: ''};

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSenha = this.handleChangeSenha.bind(this);
    
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangeSenha(event) {
    this.setState({senha: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const checkL = this.checkLogin();
    if(checkL == 1)
    {
      this.setState({mensagem: "Acessado com sucesso!"});
      console.log(this.state.mensagem)
    }
    else if(checkL == 0)
    {
      this.setState({mensagem: "Usuário ou senha incorretos!"});
      console.log(this.state.mensagem)
    }
  }

    checkLogin = () =>
    {
    if(this.state.email == "teste@pucpr.br" && this.state.senha == "teste") 
    {      
      return 1
    }
    else{
      return 0
    }
  }

  changeMessage(event)
  {
    this.setState(this.mensagem.state)
  }  
  
  render() {
    return (
      <div>
      <div className="Titulo">
        <h1>Login</h1>
      </div>
      
      <form onSubmit={this.handleSubmit}>
      <div className="Login">
        <table>
          <tbody>
          <tr>
            <td>
           <input className="TextBox" type="text" value={this.state.email} onChange={this.handleChangeEmail} />
           </td>
         </tr>
          <tr>
            <td>
            <input className="TextBox" type="text" value={this.state.senha} onChange={this.handleChangeSenha} />
            </td>
          </tr>
          </tbody>
        </table>
        <div>
        <button className="Button" type="submit" value="Submit">Acessar</button>
        </div>
        <div>
        <h3>{this.state.mensagem}</h3>
        </div>
      </div>

      </form>
      </div>

    );
  }
} 

export default Login;