import React, {useState} from "react";

import axios from "axios";
import { Col, Form, Button, Row} from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom"
import Image from "react-bootstrap/Image";
import Logo from "../../images/to-do-list.png";
import "./signin.css";

const SignIn = () => {

  const navigate = useNavigate()

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
  // const [loading, setLoading] = useState(false);

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

    const objData = {
      "email": email,
      "password": password
    }

    console.log(objData);

  axios.post('https://peaceful-citadel-71310.herokuapp.com/signin',objData)
  .then((response) => {
    console.log(response.data.token);

    localStorage.setItem("token", response.data.token)
    navigate(`/`);
  })
  .catch(err => {
    console.log(err);
  })
};
  // if (isSignIn) {
  //   return navigate("/");
  // }

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
        <Form className="col-7 " action="#" onSubmit={(e) => handleSignIn(e)}>
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
          
          <Button type="submit" className="bt-submit col-12 p-2">
          Get Started
          </Button>
          
          <p className="txt">Dont have any account? 
            <Link to="/signup" className="move-signup"><strong>  Sign Up</strong></Link>
          </p>
          
        </Form>
        </Col>
      </div>
    );
  }

export default SignIn;