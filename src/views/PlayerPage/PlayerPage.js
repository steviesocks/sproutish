import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useHistory, useParams } from "react-router-dom";
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
import ScrollToTop from "components/ScrollToTop/ScrollToTop.component";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const { videoId } = useParams();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const [videoProps, setVideoProps] = useState([]);
  const [videoIdParam, setVideoIdParam] = useState(videoId);

  useEffect(() => {
    fetch("http://localhost:3000/player", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: videoIdParam,
      }),
    })
      .then((response) => response.json())
      .then((data) => setVideoProps(data[0]));
  }, [videoIdParam]);

  console.log("DEV LOG videoProps", videoProps);
  return (
    <div>
      <ScrollToTop />
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
      <Parallax small filter image={videoProps.hero_img_url} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src={videoProps.cover_url}
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>
                      {videoProps.title}
                    </h3>
                    <h6>{`by ${videoProps.author}, read by ${videoProps.reader}`}</h6>
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
                    url={videoProps.video_url}
                    width="100%"
                    height="100%"
                    controls={true}
                    playerVars={{ modestbranding: "1" }}
                  />
                </div>
              </GridItem>
              <div className={classes.description}>
                <p>
                  {videoProps.synopsis}
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
