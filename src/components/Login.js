import SvgImage from "./SvgImage";

function Login() {
     return (
          <div className="container">
               <SvgImage />
               <div className="login-form">
                    <h3>Login Here</h3>
                    <form>
                         <label htmlFor="username">Username</label><br/>
                         <input type="text" placeholder="Enter username" name="username" /><br />

                         <label htmlFor="password">Password</label><br/>
                         <input type="password" placeholder="Enter password" name="password" /> <br />
                    </form>
               </div>
          </div>
     );
}

export default Login;