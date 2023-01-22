import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./login.css";
import { ILoginRequest } from "../../models/login-service-model";
import { postUserLogin } from "../../services/login-service";
export const Login = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(true);
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const login = async () => {
    alert(`Trying to login with Email : ${loginEmail} & Password : ${loginPassword}`);
    const request: ILoginRequest = {
      email: loginEmail,
      password: loginPassword,
    };
    // Add validation before doing the api call.
    var response = await postUserLogin(request);
    console.log(response);
  };

  return (
    <div className="d-flex-center width-100 height-100 login-page">
      <div className="login-container">
        <div className="options">
          <div className={`option ${isLogin ? "selected" : ""}`} onClick={() => setIsLogin(true)}>
            Login
          </div>
          <div className={`option ${!isLogin ? "selected" : ""}`} onClick={() => setIsLogin(false)}>
            Signup
          </div>
        </div>
        {isLogin && (
          <div className="login-form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="button" onClick={login}>
                Log In
              </Button>
            </Form>
          </div>
        )}
        {!isLogin && (
          <div className="signup-form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="
              Confirm Password"
                />
              </Form.Group>
              <Button variant="primary" type="button">
                Register
              </Button>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
};
