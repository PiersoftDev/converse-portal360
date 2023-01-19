import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
export const Login = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(true);
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
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="button">
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
