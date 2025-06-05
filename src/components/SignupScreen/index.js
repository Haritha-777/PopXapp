import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const SignupScreen = () => {
  const [agency, setAgency] = useState('yes');

  return (
    <div className="mobile-container">
      <h1 className="heading">Create your<br />PopX account</h1>

      <form className="form">
        <label className="label">
          Full Name<span className="required">*</span>
          <input type="text"  />
        </label>

        <label className="label">
          Phone number<span className="required">*</span>
          <input type="text"  />
        </label>

        <label className="label">
          Email address<span className="required">*</span>
          <input type="email"/>
        </label>

        <label className="label">
          Password<span className="required"> *</span>
          <input type="password" />
        </label>

        <label className="label">
          Company name
          <input type="text" />
        </label>

        <div className="radio-group">
          <label>Are you an Agency?<span className="required">*</span></label>
          <div className="radios">
            <label className="radio">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={agency === 'yes'}
                onChange={() => setAgency('yes')}
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={agency === 'no'}
                onChange={() => setAgency('no')}
              />
              No
            </label>
          </div>
        </div>
        <Link to="/ProfileView">
        <button type="submit" className="button-primary">
          Create Account
        </button>
        </Link>
      </form>
    </div>
  );
};

export default SignupScreen;
