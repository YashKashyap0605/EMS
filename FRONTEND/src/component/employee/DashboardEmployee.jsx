import React, { Component } from "react";
import "./DashboardEmployee.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Redirect } from "react-router-dom";
import NavBar from "../NavBar.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import Education from "./Education.jsx";
import FamilyInfo from "./FamilyInfo.jsx";
import WorkExperience from "./WorkExperience.jsx";
import LeaveApplicationEmp from "./LeaveApplicationEmp.jsx";
import NotFound404 from "../NotFound404.jsx";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
 faUser,
faFileAlt,
faUniversity,
faBriefcase,
faMale,
} from "@fortawesome/free-solid-svg-icons";



class DashboardHR extends Component {
  state = {
    redirect: true,
    checked: true 
  };
  handleChange=(checked)=> {
    console.log("switch");
    // var sidebarV = this.refs.sidebar;
    // var sidebarV = React.findDOMNode( this.refs.sidebar);
    // sidebarV.style.disply="none";
    
    if(this.state.checked==true){ 
       // document.getElementById("sidebar").setAttribute("style", "display:none")
      document.getElementById("sidebar").setAttribute("class", "display-none");
    }
    // document.getElementById("sidebar").setAttribute("style", "display:block");
    else{document.getElementById("sidebar").setAttribute("class", "display-block");}   
    this.setState({ checked });
  }

  render() {
    return (
      <Router>
        {/* <Redirect to='/login'  /> */}

        <div id="outer-main-div">
          <div id="outer-nav">
            {/* <NavBar loginInfo={this.props.data} /> */}
            <NavBar
              loginInfo={this.props.data}
              checked={this.state.checked}
              handleChange={this.handleChange}
              onLogout={this.props.onLogout}
            />
          </div>

          <div id="main-non-nav">
            <div id="sidebar">
              <div id="sidebar-top-content" />
              <div id="main-title" className="main-title-employee">
                <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
                EMPLOYEE 
              </div>
              <hr/>
              <ul className="navbar-ul">
                <li>
                  <Link
                    to={
                      "/employee/" +
                      this.props.data["_id"] +
                      "/personal-info"
                    }
                  >
                    My Information
                  </Link>
                </li>
                <hr/>
                <li>
                  <Link to={
                      "/employee/" + this.props.data["_id"] + "/leave-application-emp"
                    }>
                    Apply for Leave
                  </Link>
                </li>
                <hr/>
              </ul>
            </div>
            {/* <div id="sidebar-top-content" /> */}
            <div id="main-area">
              <div id="sidebar-top-content" />
              <Switch>
              <Route exact path="/employee/:id/personal-info"   render={props => <PersonalInfo data={this.props.data} back={false}/>} />
                <Route
                  exact
                  path="/employee/:id/personal-info"
                  render={props => <PersonalInfo data={this.props.data} back={false}/>}
                />
                <Route
                  exact
                  path="/employee/:id/education"
                  render={props => <Education data={this.props.data} back={false}/>}
                />
                <Route
                  exact
                  path="/employee/:id/family-info"
                  render={props => <FamilyInfo data={this.props.data} back={false}/>}
                />
                <Route
                  exact
                  path="/employee/:id/work-experience"
                  render={props => <WorkExperience data={this.props.data} back={false}/>}
                />
                <Route
                  exact
                  path="/employee/:id/leave-application-emp"
                  render={props => <LeaveApplicationEmp data={this.props.data} />}
                />
               
                <Route
                  render={
                    () => <NotFound404/>
                  }
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default DashboardHR;
