import { cardTitle, title } from "assets/jss/material-kit-react.js";
import cardStyle from "assets/jss/material-kit-react/components/cardStyle.js";

const libraryCardStyle = {
    bookCardContainer: {
        backgroundSize: "cover"
    },
    bookTitle: {
        ...cardTitle,
        color: "white",
        textShadow: "2px 2px 5px #000"

    },
    ...cardStyle,
    cardTitle,
    title
}

export default libraryCardStyle;