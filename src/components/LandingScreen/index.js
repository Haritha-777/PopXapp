import {Link} from 'react-router-dom'
import './index.css';
    const LandingScreen=()=>{
    return (
      <div className="mobile-container">
        <h1 className="heading">Welcome to PopX</h1>
        <p className="subtext">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>
      <Link to="/SignupScreen">  
        <button className="button-primary">Create Account</button>
      </Link>
      <Link to="/LoginScreen">
        <button className="button-secondary">Already Registered? Login</button>
      </Link>

      </div>
    );
  }
export default LandingScreen;

