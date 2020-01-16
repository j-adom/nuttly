import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Modal, Button, Form, Card, ListGroup, Row, Col, ButtonGroup, Container, Nav, ButtonToolbar} from 'react-bootstrap';


class Login extends Component {
  
  constructor() {
    super();
    this.state = {
      showLoginForm: false,
    showSecondModal: false,
      email: "",
      password: "",
      errors: {},
      error: null
    };
  }
  handleCloseLoginForm  = event => {
    this.setState({showLoginForm: false});
//
   };
 
   handleShowLoginForm  = event => {
     this.setState({showLoginForm: true});
    };
 
   handleCloseSecondModal  = event => {
    this.setState({showSecondModal: false});
   };
 
   handleShowSecondModal  = event => {
     this.setState({showSecondModal: true});
   };
 
   
   

  


  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    
    const { errors } = this.state;

    return (
      <>
    <Navbar fixed="top" expand="lg" className="colorEvent justify-content-between">
      
        
        
        
         
          <div className="events">
          
           </div>    
                <div className="containerCount">
                
          <div className="header">
            Nuttly
          </div>
          
          
          
            
           
       
           </div>     
          <ButtonToolbar>
            {/* <Button  className="SecondModal" onClick={this.handleShowSecondModal}>Second Modal</Button> */}
            

            
            <Button className="eventButtonLogin" onClick={this.handleShowLoginForm}>Login</Button>
           
            
            </ButtonToolbar>


        
         
          
      </Navbar>

    <Modal show={this.state.showLoginForm} onHide={this.handleCloseLoginForm}>
    <Modal.Header className="modalHeader" closeButton>
  
            <div style={{ textAlign: "center" }}></div>
      <Modal.Title>  <h4> <b>Login</b> below</h4></Modal.Title>
    </Modal.Header>
    <div className="col md-6" style={{ paddingLeft: "11.250px" }}>
              
          
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
    <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
        <Form className="modalBody">

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control noValidate onSubmit={this.onSubmit}
             
                
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control   noValidate onSubmit={this.onSubmit}   
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
               
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              
        </Form.Group>
        <form noValidate onSubmit={this.onSubmit}>
   
              <Button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </Button>
              {/* </div> */}
            </form>

      

      </Form>
    </Modal.Body>

  
    </Modal>

    {/* <Modal show={this.state.showSecondModal} onHide={this.handleCloseSecondModal}>
    <Modal.Header className="modalHeader" closeButton>
      <Modal.Title>nuttlyproducts</Modal.Title>
    </Modal.Header>
  
    <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
      <Card>
        <Card.Body>
          <Card.Title>second modal</Card.Title>
            <ListGroup variant="flush">
              
              <ListGroup.Item>
                <b>Description:</b> content
              </ListGroup.Item>
            </ListGroup>
        </Card.Body>
      </Card>
          
    </Modal.Body>
  
    <Modal.Footer className="modalFooter">
      <Button variant="secondary" onClick={this.handleCloseSecondModal} >Close</Button>
    </Modal.Footer>
    </Modal> */}
    
    
      </>
    );
  }
}


Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
