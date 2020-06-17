import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import TeamSection from "./Sections/TeamSection.js";
import Library from "views/Components/Sections/Library/library.component";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const scrollToLibrary = () => {
  const library = document.getElementById('library')
  console.log('library')
  library.scrollIntoView({behavior: "smooth"});
}

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Sproutish"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("../../assets/img/landing-bg.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>Children's Books With A Social Conscience.</h1>
              <h4>
                Here{"'"}s a bunch of text talking about what we're doing and why people might want to watch our videos. We've got some big ideas to share with the world here...
              </h4>
              <br />
              <Button
                color="success"
                round
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
              <Button
                simple
                color="white"
                size="lg"
                onClick={scrollToLibrary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse books
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Library />
          <TeamSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
