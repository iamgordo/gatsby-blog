import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  mylinkthingie,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      <title className={heading}>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={mylinkthingie} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
