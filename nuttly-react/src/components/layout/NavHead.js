import React, { Component } from "react";
import { Link } from "react-router-dom";



class NavHead extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="shadow p-3 mb-5 bg-white rounded">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
            
            
            </Link>  
             
            {/* <Link 
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="col s7  right waves-effect white black-text"
              
              >
                Log In
              </Link> */}
              
            
          </div>
          

        </nav>
      </div>
    )
  }
}

export default NavHead;
