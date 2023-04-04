import React from "react";
import "./home.css";
import logo from "../../images/logo.png";
import { Dialog, Button } from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Login } from "../login/login";
import { Container, Box } from "@mui/system";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

import img1 from "../../images/hero_img_1.png";
import img2 from "../../images/hero_img_2.png";
import img3 from "../../images/hero_img_3.png";
import img4 from "../../images/hero_img_4.png";
import img5 from "../../images/hero_img_5.png";
import img6 from "../../images/hero_img_6.png";
import Grid from "@mui/material/Unstable_Grid2";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Home = () => {
  const [showSignInPopup, setShowSignInPopup] = React.useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = React.useState(false);
  const handleSignInClose = () => {
    setShowSignInPopup(false);
  };
  const goToSignIn = () => {
    setShowSignInPopup(true);
  };

  const handleSignUpClose = () => {
    setShowSignUpPopup(false);
  };
  const goToSignUp = () => {
    setShowSignUpPopup(true);
  };

  return (
    <div>
      <Dialog open={showSignInPopup} onClose={handleSignInClose} TransitionComponent={Transition}>
        <Login showSignInForm={showSignInPopup} showSignUpForm={showSignUpPopup} />
      </Dialog>
      <Dialog open={showSignUpPopup} onClose={handleSignUpClose} TransitionComponent={Transition}>
        <Login showSignInForm={showSignInPopup} showSignUpForm={showSignUpPopup} />
      </Dialog>
      <Container>
        <Box
          component="div"
          sx={{
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#F7F6F2",
            marginTop: 2,
            p: 2,
            pb: 0,
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img src={logo} style={{ width: 40, height: 40, alignContent: "center" }} />
            <p style={{ padding: 6 }}>
              <h3 className="gradient-text">PARTNER.ME</h3>
            </p>
          </Box>

          <Button
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: "#2350A2",
              height: 40,
            }}
            onClick={goToSignIn}
          >
            Sign In
          </Button>
        </Box>

        <Box
          sx={{
            alignContent: "flex",
            justifyContent: "space-between",
            marginTop: 5,
            height: "60vh",
            backgroundColor: "#F7F6F2",
            borderRadius: 3,
            position: "relative",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            sx={{
              padding: 2,
              margin: 2,
            }}
          >
            <Grid xs={7} sx={{ mt: 10 }}>
              <div style={{ display: "flex", flexDirection: "row", marginBottom: "1rem" }}>
                {/* <img src={happy} style={{ width: 300, height: 300, position: "absolute", left: "3%", bottom: "2%" }} alt="Crew" />*/}
                <h1 className="main-heading gradient-text">Partnerships Made Easy!</h1>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="main-text">
                  From towering skyscrapers to grounded roads, no project is too big or small for our crew. <br /> So suit up and <b className="gradient-text">PARTNER</b> us on this epic adventure to
                  put the pieces together and <b className="gradient-text">BUILD</b> something meaningful.
                  {/* <div style={{ color: "#C85A3A" }}> */}
                  {/* <i style={{ color: "#C85A3A" }}>
                    <span> PARTNER </span>
                  </i> */}
                  {/* </div> */}
                  {/* <i style={{ color: "#FF4D54" }}>
                    <span> Build </span>
                  </i> */}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <Button
                    variant="contained"
                    size="medium"
                    sx={{
                      backgroundColor: "#2350A2",
                      height: 40,
                      padding: "1.5rem",
                      background: "-webkit-linear-gradient(#2350a2, #638bb0)",
                      mt: 1,
                    }}
                    startIcon={<GroupAddIcon />}
                    onClick={goToSignUp}
                  >
                    <strong>Join Network</strong>
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid xs={5} sx={{ pl: 7 }}>
              <div>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={1}
                  justifyContent="space-between"
                  sx={{
                    margin: 2,
                    backgroundColor: "#F7GEF2",
                  }}
                >
                  <Grid xs={6} sx={{ mt: 1 }}>
                    <img src={img1} style={{ width: 150, height: 150 }} />
                  </Grid>
                  <Grid xs={6} sx={{ mt: 1 }}>
                    <img src={img2} style={{ width: 150, height: 150 }} />
                  </Grid>
                  <Grid xs={6} sx={{ mt: 1 }}>
                    <img src={img3} style={{ width: 150, height: 150 }} />
                  </Grid>
                  <Grid xs={6} sx={{ mt: 1 }}>
                    <img src={img4} style={{ width: 150, height: 150 }} />
                  </Grid>
                  <Grid xs={6} sx={{ mt: 1 }}>
                    <img src={img5} style={{ width: 150, height: 150 }} />
                  </Grid>
                  <Grid xs={6} sx={{ mt: 1 }}>
                    <img src={img6} style={{ width: 150, height: 150 }} />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
          {/* <Grid container spacing={2} sx={{
            padding: 5,
            margin: 5,
            height: 800,
            backgroundColor: "#F7F6F2",
            borderRadius: 3,
          }}>
            
            <Grid xs={4}>
  
            </Grid>
            <Grid xs={4}>
              <img
                src={constructionWorker}
                style={{ width: 100, height: 100 }}
              />
            </Grid>

            <Grid xs={4}>
              <img src={constructionHat} style={{ width: 150, height: 150 }} />
            </Grid>
            <Grid xs={4}>
              <p>This is test</p>
            </Grid>
            <Grid xs={4}>
              <img
                src={constructionTruck}
                style={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid xs={4}>
              
            </Grid>

            <Grid xs={8}>
              <img src={woodWorker} style={{ width: 120, height: 120, marginTop:100 }} />
            </Grid>
          </Grid> */}
        </Box>
      </Container>

      {/* <Row>
        <Col span={12} push={12}>
          <img
            className="home-page__hero-image"
            src={heroImage}
            alt="Home Page"
          />
        </Col>
        <Col className="home-page__hero-text-container" span={12} pull={12}>
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
              Easily manage projects, track expenses, <br /> automate
              procurement processes & more.
            </span>
            <div className="cta-container">
              <button onClick={goToLogin}>Get Started</button>
            </div>
          </div>
        </Col>
      </Row> */}
    </div>
  );
};
