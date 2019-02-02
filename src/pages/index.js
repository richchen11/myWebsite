import React from "react"
import Layout from "../components/layout";
import profilePic from "./photos/profilePic.jpg";
import globalstyles from "../utils/global.css"
import Footer from "../components/footer";
import Banner from "../components/banner";


export default () => (
  <div>
  <Banner></Banner>
  <Layout className = {globalstyles.layout}>
    <h1>About Me!</h1>
    <div className={globalstyles.user}>
      <img src = {profilePic} className= {globalstyles.avatar} alt="" />
      <div className={globalstyles.description}>
        <h2 className = {globalstyles.h2} >{"Richard Chen"}</h2>
        <p className={globalstyles.p}>{"I'm currently a nongraduating senior at the University of Maryland," 
        + "College Park. I am double degreeing in Computer Science and Materials Engineering."
        + "I have previously worked in the Polymer Processing Laboratory of Dr. David Bigio as an undergraduate researcher."
        + ""
        }</p>
      </div>

      </div>
  <Footer> </Footer>
  </Layout>
  </div>
)