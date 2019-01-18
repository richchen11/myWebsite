import React from "react"
import Layout from "../components/layout";
import myPicture from "./photos/myPicture.jpg";

export default () => (
    <Layout>
  <div>
    <h1>About me</h1>
    <table>
        <tr>
        <img src = {myPicture}  alt= ""/>
            <p>I’m good enough, I’m smart though, and gosh darn it, people like me!</p>
        </tr>
    </table>

  </div>
  </Layout>
)