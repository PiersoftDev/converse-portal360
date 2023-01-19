import React from "react";
import { Col, Row, Image, Layout } from "antd";
import heroImage from "../../Images/enhanced.png";
import "./Home.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import logo from "../../Images/logo.png";

const { Header, Footer, Sider, Content } = Layout;

export const Home = () => {
  return (
    <Row>
      <Col span={12} push={12}>
        <img className="home-page__hero-image" src={heroImage} />
      </Col>
      <Col className="home-page__hero-text-container" span={12} pull={12}>
        <div><img className="home-page__logo" src={logo} /></div>
        <div className="introduction-text">
          <span className="primary">Building Success,</span>
          <br />
          <span className="primary">
            <span className="strike-through">one</span> multiple projects at a
            time.
          </span>
          <br />
          <br />
          <span className="secondary">
            Easily manage projects, track expenses, <br /> automate procurement
            processes & more.
          </span>
          <div className="cta-container">
            <button>Get Started</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};
