import SvgImage from "./SvgImage";
import "../css/Login.css";
import React from "react";


class Login extends React.Component {
     constructor({user}) {
          super();
          console.log(user);
          this.state = ({username: '', password: '', isLoggedin: false});
     }


     handleSubmit = event => {
          
     }

     handleChangeInput = event => {
          
     }


     render() {
          return (
               <div className="container">
                    <SvgImage />
                    { this.state.isLoggedin && <p>You are already logged in..</p> }
                    <div className="login-form">
                         <h2>Login Here</h2>
                         <p>{ this.state.isLoggedin }</p>
                         <form onSubmit={this.handleSubmit}>
                              <label htmlFor="username">Username</label><br/>
                              <input type="text" placeholder="Enter username" name="username" onChange={this.handleChangeInput} required={true} /><br />

                              <label htmlFor="password">Password</label><br/>
                              <input type="password" placeholder="Enter password" name="password" onChange={this.handleChangeInput} required={true} /> <br />

                              <button onClick={this.submitForm} > Login </button>
                         </form>
                    </div>
               </div>
          )
     }
}

export default Login;