import React from 'react'
import PropTypes from 'prop-types'
import resume from '../files/RichardChenResume.pdf'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Richard Chen </h1>
                <p>A Computer Science and Materials Engineering student at the University of Maryland.</p>
                <a href={resume}>Check out my resume!</a>
                <p>Email me at chenrich11@gmail.com</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('About Me')}}>About Me</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('Work Experience')}}>Work Experience</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('Side Projects')}}>Side Projects</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
