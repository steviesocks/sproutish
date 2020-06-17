import { cardTitle, title } from "assets/jss/material-kit-react.js";
import cardStyle from "assets/jss/material-kit-react/components/cardStyle.js";
import cardFooterStyle from "assets/jss/material-kit-react/components/cardFooterStyle.js";

const libraryCardStyle = {
  bookCardContainer: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "200px",
  },
  bookCard: {
    background:
      "radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,.7)), linear-gradient(to top, rgba(0,0,0,.8),rgba(0,0,0,0) 50%)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "space-between",
  },
  bookCardButtons: {},
  bookTitle: {
    ...cardTitle,
    color: "white",
    textShadow: "2px 2px 5px #000",
    width: "100%",
    fontSize: "2rem"
  },
  bookInfo: {
    backgroundColor: "rgba(0,0,0,.3)",
    backdropFilter: "blur(10px)",
    color: "white",
    padding: "1rem",
    fontWeight: "500"
  },
  ...cardFooterStyle,
  ...cardStyle,
  cardTitle,
  title,
};

export default libraryCardStyle;
