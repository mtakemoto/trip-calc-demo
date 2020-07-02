import AppBar from '@material-ui/core/AppBar';
import { Link } from "gatsby"
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import PropTypes from "prop-types"
import React from "react"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    margin: "0 5px"
  },
  link: {
    color: "white",
    textDecoration: "none"
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { siteTitle } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <LocalAirportIcon />
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>
            {siteTitle}
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
