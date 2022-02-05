import React from 'react';
import './signin.css';
import 'bootstrap/dist/css/bootstrap.css';
import Img from './login.png';  
import {Button} from 'react-bootstrap'; 

const signin = () => {
  return (
  <div>
            <div className="lContainer">
        <div className="lItem">
          <div className="loginImage">
          <img src={Img} width="300" style={{position: 'relative'}} alt="login"/>
          </div>
          <div className="Card">
            <h2>Signin</h2>
            <div className="form-container">
            <form>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="button">
                  <Button type="button" class="btn btn-primary">Sign In</Button>
                </div>
                <p className="forgot-password text-right">
                    New Here <a href="/signup">signup?</a>
                </p>
            </form>
        </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default signin;
