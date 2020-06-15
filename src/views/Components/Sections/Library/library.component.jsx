import React from "react";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import LibraryCard from "components/LibraryCard/LibraryCard.component";


import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

import database from "database/database";


const useStyles = makeStyles(styles);

export default function Library() {
  const classes = useStyles();
  return (
    <div id="library" className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          {database.map(book => (
            <GridItem xs={12} sm={12} md={6}>
              <LibraryCard
                title={book.title}
                author={book.author}
                synopsis={book.synopsis}
                reader={book.reader}
                imageUrl={book.imageUrl}
                coverUrl={book.coverUrl}
              />
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
