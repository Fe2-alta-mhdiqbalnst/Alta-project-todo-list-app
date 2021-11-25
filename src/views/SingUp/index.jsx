import { useState, useEffect } from "react";
import { Col, Form, Button, Row} from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import './signup.css';

const SignUp = ({signUp}) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setconfPassword] = useState('');

  const [usernameErr, setUsernameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [confPasswordErr, setconfPasswordErr] = useState('');

  const handleChange = (e, username) => {

    const user = {};
    const emailRegEx = RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    user[username] = e.target.value;

    // validations
    switch (username) {
      case 'username':
        setUsername(user.username);
        user.username.length < 3 ? setUsernameErr('username must be at least 3 characters!') : setUsernameErr('');
        break;

      case 'email':
        setEmail(user.email);
        !emailRegEx.test(user.email) ? setEmailErr('Invalid Email!') : setEmailErr('');
        break;

      case 'password':
        setPassword(user.password);
        user.password.length < 4 ? setPasswordErr('Password must be at least 8 characters!') : setPasswordErr('');
        break;

      case 'confPassword':
        setconfPassword(user.confPassword);
        user.confPassword !== password ? setconfPasswordErr('Passwords do not match!') : setconfPasswordErr('');
        break;

      default:
        break;
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (username && email && password && confPassword && !usernameErr && !emailErr && !passwordErr && !confPasswordErr) {
      await signUp({ username, email, password });
    }
  }
   
    const navigate = useNavigate()

    const goToSignUp = () => {
      navigate("/signup");
    }
  
    const goToSignIn = () => {
      navigate("/signin");
    }

    useEffect(() =>{
      console.log("did amount!");

      return () => {
        console.log("will unmount!");
      };
    }, []);

    return (
      <div className="w-100 row">
        <Col className="buttonnav col-3 p-0 m-0 d-flex justify-content-end align-items-center">
          <Row>
          <Button onClick={() => goToSignIn()} type="submit" className="bt-signin p-3 mb-2">
           Sign In
          </Button>

          <Button onClick={() => goToSignUp()} type="submit" className="bt-signup p-3 ">
            Sign Up
          </Button>
          </Row>
        </Col>

        <Col className="signup-form col-9 d-flex justify-content-center align-items-center">
        <Form className="col-7">
          <h3 className="app-name">Create Your Account</h3>
          <p className="txt">Already have an account?
            <Link to="/signin" className="move-signin"><strong >  Sign In</strong></Link>
          </p> 
          
          <br />
          <br />
          <Form.Control 
            type="text" 
            name="username"
            id="username"
            placeholder="username" 
            className="border-none"
            
            
            onChange={(e) => handleChange(e, 'username')}/>
          <br />

          <Form.Control 
            type="email" 
            name="email"
            id="email"
            placeholder="email" 
            className="border-none"
            
            onChange={(e) => handleChange(e, 'email')}/>
          <br />

          <Form.Control 
            type="password"
            name="password"
            id="password" 
            placeholder="password" 

            onChange={(e) => handleChange(e, 'password')}/>
          <br />

          <Form.Control 
            type="password"
            name="confPassword"
            id="confPassword" 
            placeholder="confirm Password" 

            onChange={(e) => handleChange(e, 'confPassword')}/>
          <br />

          <Button type="submit" className="bt-submit col-12 p-2">
          Sign Up
          </Button>

        </Form>
        </Col>
      </div>
    );
  }

export default SignUp;