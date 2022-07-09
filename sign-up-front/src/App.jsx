import React, { Component } from 'react'; //"imrc" import reactComponent
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from'axios';
import './App.css'

class App extends Component { //"cc" entrer 
      constructor(){
          super()
          this.state = {
              fullName:'',
              userName:'',
              email:'',
              password:''
          }

          this.changeFullName = this.changeFullName.bind(this)
          this.changeUserName = this.changeUserName.bind(this)
          this.changeEmail = this.changeEmail.bind(this)
          this.changePassword = this.changePassword.bind(this)
          this.onSubmit =this.onSubmit.bind(this)
        }

      changeFullName(event){
          this.setState({
              fullName:event.target.value
          })}

       changeUserName(event){
           this.setState({
               userName:event.target.value
           })}
        
        changeEmail(event){
            this.setState({
                email:event.target.value
            })}
        
        changePassword(event){
            this.setState({
            password:event.target.value
            })}
        
        onSubmit(event){
            
            
            const registered = {
                fullName: this.state.fullName,
                userName: this.state.userName,
                email: this.state.email,
                password: this.state.password
            }

            axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))
        
            this.setState = {
                fullName:'',
                userName:'',
                email:'',
                password:''
            }
            // event.preventDefault()
        }
    render() { 
        return (
            <div className='wrapper'>
                <div className='form'>
                    <h1 className='title'>Welcome SURF-LOVERS</h1>
                    <form onSubmit={this.onSubmit} className='champ'>
                        <input 
                           type='text'
                           placeholder='FullName'
                           onChange={this.changeFullName}
                           value={this.state.fullName}
                           className="input"
                        />

                        <input 
                           type='text'
                           placeholder='UserName'
                           onChange={this.changeUserName}
                           value={this.state.userName}
                           className="input"
                        />

                        <input 
                           type='text'
                           placeholder='E-mail'
                           onChange={this.changeEmail}
                           value={this.state.email}
                           className="input"
                        />

                        <input 
                           type='password'
                           placeholder='Password'
                           onChange={this.changePassword}
                           value={this.state.password}
                           className="input"
                        />
                 <div align="center" className='placebtn'>
                        <input type='submit' className='btn ' value='Sign Up' />
                </div>     
                    </form>
                </div>
            </div>
        );
    }
}

 
export default App;

//https://www.youtube.com/watch?v=SQqSMDIzhaE