import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { Col, Form, Button, Row} from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom"
import Image from "react-bootstrap/Image";
import Logo from "../../images/to-do-list.png";
import "./signin.css";

const SignIn = (props) => {

  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/");
  }

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const goToSignUp = () => {
    navigate("/signup");
  }

  const goToSignIn = () => {
    navigate("/signin");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isSignIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message)
  
  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    const {email, password}
    const objData = {
      email: email,
      password: password
    }

    console.log(objData);

  }

  if (isSignIn) {
    return navigate("/");
  }

    return (
      <div className="w-100 row">
        <Col className="buttonnavin col-3 p-0 m-0 d-flex justify-content-end align-items-center">
          <Row>
          <Button onClick={() => goToSignIn()} type="submit" className="bt-signin p-3 mb-2">
           Sign In
          </Button>

          <Button onClick={() => goToSignUp()} type="submit" className="bt-signup p-3">
            Sign Up
          </Button>
          </Row>
        </Col>

        <Col className="login-form col-9 d-flex justify-content-center align-items-center">
        <Form className="col-7 ">
          <Image src={Logo} alt="logo" className="app-logo d-block mx-auto img-fluid w-30"/>
          <br />
          <h3 className="app-name"><strong>to-do list app</strong></h3>
          <br />
          <br />
          
          <Form.Control 
          type="email" 
          placeholder="email" 
          onChange={onChangeEmail}
          validations={[required]}
          className="inpt-email"
          />

          <br />
          <Form.Control 
          type="password" 
          placeholder="password" 
          onChange={onChangePassword}
          validations={[required]}
          className="inpt-password"/>
          <br />
          
          <Button className="bt-submit col-12 p-2">
          Get Started
          </Button>
          
          <p className="txt">Dont have any account? 
            <Link to="/signup" className="move-signup"><strong>  Sign Up</strong></Link>
          </p>
          
        </Form>

        {/* <Form onSubmit={handleSignIn} ref={form}>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <Input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Sign In</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
          <p className="txt">Dont have any account? 
            <Link to="/signup" className="move-signup"><strong>  Sign Up</strong></Link>
          </p>
        </Form> */}
        </Col>
      </div>
    );
  }

export default SignIn;