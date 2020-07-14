/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "./layout.css"

import { graphql, useStaticQuery } from "gatsby"

import Header from "./header"
import PropTypes from "prop-types"
import React from "react"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footer: {
    textAlign: 'center'
  }
});

const Layout = ({ children }) => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `20px auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer className={classes.footer}>
          <Typography>
            Made with ☕ by <a href="https://github.com/mtakemoto/trip-calc-demo">@mtakemoto</a>
          </Typography>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
