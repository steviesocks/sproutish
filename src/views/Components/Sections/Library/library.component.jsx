import React, { useEffect, useState } from "react";
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

  const [ bookList, setBookList ] = useState([]);
  const [libraryFilter, setLibraryFilter] = useState('');

  useEffect(() => {
    console.log('useEffect triggered');
    fetch('http://localhost:3000/browse', {
      method: 'get'
    })
      .then(response => response.json())
      .then(data => {
        console.log('server response:', data);//delete this
        setBookList(data)
      })
      .catch(err => console.log("there was an error", err));
  }, [libraryFilter]);

  console.log("booklist state", bookList) //delete this

  return (
    <div id="library" className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          {bookList.map(book => (
            <GridItem xs={12} sm={12} md={6}>
              <LibraryCard
                key={book.id}
                title={book.title}
                author={book.author}
                synopsis={book.synopsis}
                reader={book.reader}
                imageUrl={book.image_url}
                coverUrl={book.cover_url}
              />
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
