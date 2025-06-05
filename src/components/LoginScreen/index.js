import { Link } from 'react-router-dom';
import './index.css';

const LoginScreen = () => {
  return (
    <div className="login-container">
      <h1 className="heading">Signin to your<br />PopX account</h1>
      <p className="subtext">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>

      <div className="form-group">
        <label className="form-label" htmlFor="email">Email Address</label>
        <input className="form-input" type="email" id="email" placeholder="Enter email address" />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="password">Password</label>
        <input className="form-input" type="password" id="password" placeholder="Enter password" />
      </div>

      <Link to="/ProfileView">
        <button className="login-button" disabled>Login</button>
      </Link>
    </div>
  );
};

export default LoginScreen;


