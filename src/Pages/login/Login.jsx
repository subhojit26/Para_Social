import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
    const {login}=useContext(AuthContext);
    const handleLogin=()=>{
        login();
    }
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Please Login</h1>
                <p>
                    Socialise with friends and the world around you with the latest stories and updates
                </p>
                <span>Don't have an account?</span>
                <Link to="/register">
                <button className="button">Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="username" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button className="button" onClick={handleLogin}>Login</button>
                </form>
            </div>

        </div>

            
    </div>
  )
}

export default Login