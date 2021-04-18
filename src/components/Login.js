import SvgImage from "./SvgImage";
import "../css/Login.css";
import React from "react";



class Login extends React.Component {
     constructor() {
          super();
          this.state = ({username: '', password: '', isLoggedin: false});
     }


     submitForm = (e) => {
          this.setState({
               isLoggedin: true
          })
          console.log(this.state);
          alert("hii");
     }

     handleChangeInput = (e) => {
          this.setState({
               [e.target.name]: e.target.value
          })
     }
     render() {
          return (
               <div className="container">
                    <SvgImage />
                    { this.state.isLoggedin && <p>You are already logged in..</p> }
                    <div className="login-form">
                         <h3>Login Here</h3>
                         <p>{ this.state.isLoggedin }</p>
                         <form>
                              <label htmlFor="username">Username</label><br/>
                              <input type="text" placeholder="Enter username" name="username" onChange={this.handleChangeInput} /><br />

                              <label htmlFor="password">Password</label><br/>
                              <input type="password" placeholder="Enter password" name="password" onChange={this.handleChangeInput} /> <br />

                              <button onClick={this.submitForm} > Login </button>
                         </form>
                    </div>
               </div>
          )
     }
}

export default Login;