import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic03 from '../images/pic03.jpg'
import aeongo from '../images/aeongo.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="About Me" className={`${this.props.article === 'About Me' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About Me</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Hello! My name is Richard Chen! I'm studying computer science and materials engineering at the 
            University of Maryland. I'm an incoming 2020 summer software engineering intern at Capital One! </p>
          {close}
        </article>
        <article id="Work Experience" className={`${this.props.article === 'Work Experience' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <h3 className= "major">Software Developer Intern (May 2019 - August 2019)</h3>
          <h3 className= "major">Aeongo Technologies</h3>
          <span className="image main"><img src={aeongo} alt="" /></span>
          <ul>
            <p> - Led two other interns on the back-end development of a microservice that would support an early childhood development product. 
                  Microservice was developed with the Spring Framework and a Postgres database. </p>
            <p> - Created RESTful APIs to expose microservice for our front-end developers. API testing was performed with Swagger and Postman. </p>
            <p> - Integrated automated UI testing on our React Native Android application using Appium framework. </p>
          </ul>

          <h3 className= "major">Undergraduate Researcher (June 2017 - February 2018)</h3>
          <h3 className= "major">Polymer Processing Lab</h3>
          <ul>
            <p> - Investigated and led the design for the implementation of resonant acoustic mixing (RAM) to 
                  improve the formation of polymer-based explosive binders. </p>
            <p> - Collaborated within a core 7-member lab group, lab groups in Department of Chemical Engineering, 
                  and the Naval Surface Warfare Center (NSWC). </p>
          </ul>
          
          {close}
        </article>

        <article id="Side Projects" className={`${this.props.article === 'Side Projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Side Projects</h2>
          <span className="image main"><img src={pic03} alt="" /></span>

          <h3 className= "major">Personal Website</h3>
          <ul>
            <p> - Created React components with Gatsby, a static website generator, 
                  for React JS to create the necessary HTML and CSS files.  </p>
            <p> -Deployed using Netlify, to allow continuous integration and continuous deployment (CI/CD) 
                  whenever changes are pushed to a central Git repository. </p>
          </ul>
          <div>
    
          <h3 className= "major">Analysis of the Professional</h3>
          <h3 className = "major">Counter-Strike Global Offensive Circuit </h3>
          <a href = "http://richchen11.github.io/">Link here</a>

          <ul>
            <p> - Created a tutorial of the entire data science pipeline from sourcing the data to 
                  generating a predictive model  
            </p>
            <p> - Leveraged the following libraries: Pandas, Beautiful Soup (OPTIONAL), Matplotlib, Numpy, Scikit-Learn, Seaborn
            </p>
          </ul>
          </div>



          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main