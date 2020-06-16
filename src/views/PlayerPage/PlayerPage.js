import React from "react";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/playerPage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/bundo-bg.jpg")} />


      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src="https://i.ibb.co/SRbv9r2/marlonbundo.jpg"
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>
                      A Day in the Life of Marlon Bundo
                    </h3>
                    <h6>by John Oliver, read by Rachael Duddy</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <div className={classes.playerWrapper}>
                  <ReactPlayer
                    className={classes.reactPlayer}
                    url="https://www.youtube.com/watch?v=-0o5LSi9wks&feature=youtu.be"
                    width="100%"
                    height="100%"
                    controls={true}
                    playerVars={{ modestbranding: "1" }}
                  />
                </div>
              </GridItem>
              <div className={classes.description}>
                <p>
                  Meet Marlon Bundo, a lonely bunny who lives with his Grampa,
                  Mike Pence - the Vice President of the United States. But on
                  this Very Special Day, Marlon's life is about to change
                  forever... With its message of tolerance and advocacy, this
                  charming children's book explores issues of same sex marriage
                  and democracy. Sweet, funny, and beautifully illustrated, this
                  book is dedicated to every bunny who has ever felt different.
                </p>
              </div>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
