import React, { Component } from "react";
import "./DashboardAdmin.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Redirect } from "react-router-dom";
import EmployeeForm from "../EmployeeForm";
import Role from "../Role.jsx";
import NavBar from "../NavBar.jsx";
import RoleForm from "../RoleForm.jsx";
import Position from "../Position.jsx";
import Department from "../Department.jsx";
import AdminPortal from "./AdminPortal.jsx";
import AdminProjectBid from "./AdminProjectBid.jsx";
import NotFound404 from "../NotFound404.jsx";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersCog,
  faUsers,
  faChair,
  faBuilding,
  faDollarSign,
  faTasks
} from "@fortawesome/free-solid-svg-icons";

function RoleAdminF() {
  return <Role />;
}
function RoleFormF() {
  return <RoleForm />;
}

function PositionF() {
  return <Position />;
}
function employeeF() {
  return <EmployeeForm />;
}
function DepartmentF() {
  return <Department />;
}

class DashboardAdmin extends Component {
  state = {
    redirect: true,
    checked: true 
  };
  handleChange=(checked)=> {
    console.log("switch");
    
    if(this.state.checked==true){ 
      document.getElementById("sidebar").setAttribute("class", "display-none");
    }
    else{document.getElementById("sidebar").setAttribute("class", "display-block");}   
    this.setState({ checked });
  }

  render() {
    return (
      <Router>
        {/* <Redirect to='/login'  /> */}

        <div id="outer-main-div">
          <div id="outer-nav">
            <NavBar loginInfo={this.props.data} checked={this.state.checked} handleChange={this.handleChange} onLogout={this.props.onLogout}/>
          </div>

          <div id="main-non-nav">
            <div id="sidebar">
              <div id="sidebar-top-content" />
              <div id="main-title">
                <FontAwesomeIcon icon={faUsersCog} className="sidebar-icon" />
                ADMIN
              </div>
              <hr/>
              <ul className="navbar-ul">
                <li>
                  <Link to="/admin/role">
                    Role 
                  </Link> 
                </li>
              <hr/>
                <li>
                  <Link to="/admin/position">
                    Position 
                  </Link> 
                </li>
                <hr/>
                <li>
                  <Link to="/admin/department">
                    Department 
                  </Link> 
                </li>
                <hr/>
                
              </ul>
            </div>
            {/* <div id="sidebar-top-content" /> */}
            <div id="main-area">
              <div id="sidebar-top-content" />
              {/* //table */}
              {/* <RoleAdmin/> */}
              <Switch>
                <Route exact path="/admin/role" component={RoleAdminF} />
                {/* <Route path="/admin/role/form" exact component={RoleFormF} /> */}
                <Route
                  path="/admin/position"
                  exact
                  component={PositionF}
                />
                <Route
                  path="/admin/department"
                  exact
                  component={DepartmentF}
                />
                 
                <Route render={() => 
<NotFound404/>
                  // <Redirect to="/admin/role" />
                } />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default DashboardAdmin;
