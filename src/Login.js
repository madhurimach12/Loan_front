import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { Redirect } from 'react-router'
import axios from 'axios';
import App from "./App";
import Register from "./Register";
import applyLoan from "./ApplyLoan";

class Login extends Component {

  //checks employee info in the db
  // constructor(props){
  //   super(props);
  //   this.state={
  //     empId:'',
  //     password:'',
  //     loginmessage:'',
  //     isLogin: false
  //   }
  // }
  
  changeState = (loginState, employee) => {  
    this.setState({isLogin:loginState, employee:employee}); 
       }; 
  
  handleIdChange = e=>{
    this.setState({
      empId: e.target.value
    })

  }

  handlePasswordChange = e=>{
    this.setState({
      password: e.target.value
    })

  }

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.empId) {
      alert("Emp ID is required");
    } else if (!this.state.password) {
      alert("Password is required");
    } 
    else {
      const payload = {
        "employeeId":this.state.empId,
        "password":this.state.password
      }
  
      axios.post('http://localhost:8080/luma/api/login', payload)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('employee', JSON.stringify(res.data));
            this.setState({
              isLogin: true
            })
          }

        ).catch(err => {
            alert("Wrong empId or password combination");
            this.setState({
              isLogin: false
            })
        })    
    }
    

  };

  render() {
    if (localStorage.getItem('employee')){
      return(
      <Navigate to="/home" replace={true} /> 
      );
    }
    return (
      <div className="Login">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="empId"><b><h3>Employee ID</h3></b></label>
            <input type="text" name="empId" onChange={this.handleIdChange} />
          </div>
          <div className="input-group">
            <label htmlFor="password"><b><h3>Password</h3></b></label>
            <input type="password" name="password" onChange={this.handlePasswordChange} />
          </div>
          <button className = "primary" type="submit">Log In</button>
        </form>
        <div>
          <Link to="register">
            <button className="secondary">Register</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
