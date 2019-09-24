import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="About Me" className={`${this.props.article === 'About Me' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About Me</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Richard Chen.</p>
          {close}
        </article>

        <article id="Work Experience" className={`${this.props.article === 'Work Experience' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <h3 className= "major">Software Developer Intern @ Aeongo Technologies</h3>
          <ul>
            <p> -Led two other interns on the back-end development of a microservice that would support an early childhood development product. 
              Microservice was developed with the Spring Framework and a Postgres database. </p>
            <p> -Created RESTful APIs to expose microservice for our front-end developers. 
              API testing was performed with Swagger and Postman. </p>
            <p> -Integrated automated UI testing on our React Native Android application using Appium framework. </p>
          </ul> 
          {close}
        </article>

        <article id="Side Projects" className={`${this.props.article === 'Side Projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Side Projects</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p> hello</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/chen_is_rich/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
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