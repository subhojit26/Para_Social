import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Please Login</h1>
                <p>
                    Socialise with friends and the world around you with the latest stories and updates
                </p>
                <span>Already have an account?</span>
                <Link to="/login">
                <button className="button">Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="username" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Name" />
                    <button className="button">Register</button>
                </form>
            </div>

        </div>

            
    </div>
  )
}

export default Register