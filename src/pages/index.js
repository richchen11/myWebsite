import React from "react"
import Layout from "../components/layout";
import myPicture from "./photos/myPicture.jpg";
import styles from "./projects.module.css"
import globalstyle from "../utils/global.css"


export default () => (
<div>
  <Layout> 
    <h1>About Me!</h1>
    <div className={styles.user}>
      <img src={myPicture} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className = {globalstyle.h2} >{"Richard Chen"}</h2>
        <p className={globalstyle.p}>{"I'm currently a senior at the University of Maryland. " +
        "I am double degreeing with Material Science and Computer Science. "}</p>
      </div>
      </div>
  </Layout>
      <div className = {globalstyle.footer}>@CopyRight</div>
  </div>
)