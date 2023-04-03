import React from "react";
import "./home.css";
import logo from "../../images/logo.png";
import { Dialog, Button, TextField } from "@mui/material";
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
import happy from "../../images/happy.png";
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
  const [showLoginPopup, setShowLoginPopup] = React.useState(false);
  const handleClose = () => {
    setShowLoginPopup(false);
  };
  const goToLogin = () => {
    setShowLoginPopup(true);
  };
  return (
    <div>
      <Dialog
        open={showLoginPopup}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Login />
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
            <img
              src={logo}
              style={{ width: 40, height: 40, alignContent: "center" }}
            />
            <p style={{ padding: 6 }}>
              <h5>PARTNER.ME</h5>
            </p>
          </Box>

          <Button
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: "#2350A2",
              height: 40,
            }}
            onClick={goToLogin}
          >
            Login
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
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img src={happy} style={{ width: 40, height: 40 }} />
                <h1>PARTNER.ME</h1>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h5>
                  From towering skyscrapers to grounded roads, no project is too
                  big or small for our crew. So suit up and
                  {/* <div style={{ color: "#C85A3A" }}> */}
                  <i style={{ color: "#C85A3A" }}>
                    <span> PARTNER </span>
                  </i>
                  {/* </div> */}
                  us on this epic adventure to put the pieces together and
                  
                  <i style={{ color: "#FF4D54" }}>
                    <span> Build </span>
                  </i>
                  
                  something meaningful.
                </h5>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Enter Whatsapp Number"
                    variant="outlined"
                    sx={{
                      width: "20vw",
                      ml: 2,
                      p: 0,
                      height: 40,
                      lineHeight: "10vh",
                    }}
                  />
                  <Button
                    variant="contained"
                    size="medium"
                    sx={{
                      backgroundColor: "#2350A2",
                      height: 40,
                      ml: 2,
                      mt: 1,
                    }}
                    startIcon={<GroupAddIcon />}
                    onClick={goToLogin}
                  >
                    Join Network
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
