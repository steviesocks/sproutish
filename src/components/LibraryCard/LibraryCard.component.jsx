import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import Button from "components/CustomButtons/Button";

import styles from "assets/jss/material-kit-react/components/libraryCardStyle";

const useStyles = makeStyles(styles);

const LibraryCard = (props) => {
  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  const { title, author, synopsis, reader, imageUrl, coverUrl } = props;

  console.log("library-card classes", classes)

  const handleExpand = () => {
    expand ? setExpand(false) : setExpand(true);
  }

  return (
    <div>
      <Card className={classes.bookCardContainer} style={{backgroundImage: `url(${imageUrl})`}}>
        <CardBody className={classes.bookCard} >
          <h4 className={classes.bookTitle}>{title}</h4>
          <p>{author}</p>
          <p>{reader}</p>
          <p>{expand ? synopsis : null}</p>
          <Button color="info" simple onClick={handleExpand}>
            <i className={expand ? "fas fa-chevron-circle-up" : "fas fa-chevron-circle-down"} />
            {expand ? "Collapse" : "Synopsis"}
          </Button>
          <Button color="primary">
            <i className="fas fa-play" />
            Watch Now
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default LibraryCard;
