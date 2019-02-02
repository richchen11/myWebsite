import React from "react"
import { Link } from "gatsby"
import globalstyle from "../utils/global.css";


const ListLink = props => (
  <li style= {{ display: `inline-block`, marginRight: `1rem`,fontFamily: `'Roboto', sans-serif;`}}>
    <Link to={props.to}> {props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 900, padding: `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 className = {globalstyle.h3} style={{ display: `inline` }}>
           Richard Chen
        </h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, fontFamily: `'Roboto', sans-serif;`}}>
        <ListLink to="/projects/"> PROJECTS</ListLink>
      </ul>
    </header>
    {children}
  </div>
)