import React from "react"
import { Link } from "gatsby"

const footer = props => {
  return (
    <div>
      <div className="footer bg-dark text-white">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5 mb-3 mb-md-0">
              <h6 className="text-uppercase text-white-50">About</h6>
              <p className="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-md-2 mb-3 mb-md-0">
              <h6 className="text-uppercase text-white-50">Company</h6>
              <ul className="list-unstyled small">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li />
              </ul>
            </div>
            <div className="col-md-2 mb-3 mb-md-0">
              <h6 className="text-uppercase text-white-50">Services</h6>
              <ul className="list-unstyled small">
                <li>
                  <Link to="/">Web Design</Link>
                </li>
                <li>
                  <Link to="/">Content Creation</Link>
                </li>
                <li>
                  <Link to="/">Development</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 text-center mb-3 mb-md-0">
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa fa-instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <span>
            © 2019 All rights reserved. Designed and powered by {``}
            <a
              href="https://webriq.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebriQ
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  )
}

export default footer
