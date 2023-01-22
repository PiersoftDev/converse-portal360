import React from "react";
import { Col, Row } from "antd";
import "./home.css";
import heroImage from "../../images/enhanced.png";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <Row>
      <Col span={12} push={12}>
        <img className="home-page__hero-image" src={heroImage} alt="Home Page" />
      </Col>
      <Col className="home-page__hero-text-container" span={12} pull={12}>
        <div>
          <img className="home-page__logo" src={logo} alt="Logo" />
        </div>
        <div className="introduction-text">
          <span className="primary">Building Success,</span>
          <br />
          <span className="primary">
            <span className="strike-through">one</span> multiple projects at a time.
          </span>
          <br />
          <br />
          <span className="secondary">
            Easily manage projects, track expenses, <br /> automate procurement processes & more.
          </span>
          <div className="cta-container">
            <button onClick={goToLogin}>Get Started</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};
