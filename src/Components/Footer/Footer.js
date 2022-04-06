import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <span className="name">
              Reach out to me on 👇
            </span>
        <div className="iconContainer">
            <a href="https://github.com/abhishekpratapsingh-c/inshorts-clone" target="__blank">
            <i className="fab fa-github fa-2x"> </i>
            </a>
            <a href="https://www.linkedin.com/in/abhishek-pratap-singh-0a47a71b6/" target="__blank">
            <i className="fab fa-linkedin fa-2x"></i>
            </a>
        </div> 
            </div>
    )
}

export default Footer
