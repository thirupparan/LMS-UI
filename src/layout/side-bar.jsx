import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import authService from "../_utils/auth-service";

class SideBar extends Component {
  state = {
    role: "",
    menu: []
  };

  componentDidMount() {
    let token = authService.getToken();
    let decodeToken = authService.decode(token);
    if (decodeToken !== null) {
      this.setState({
        role: decodeToken.role,
        menu: decodeToken.menu
      });
    }
  }

  renderList = role => {
    if (this.props.isAuth) {
      const renderlist = this.state.menu.map((linkData, index) => {
        let pageid = "page" + index;
        let hashpage = "#" + pageid;

        if (linkData.subMenu == null) {
          return (
            <li className='sidebar-list-item'>
              <a href={linkData.menuLink} className='sidebar-link text-muted'>
                <i className='fas fa-home mr-3 text-gray'></i>
                <span>{linkData.menuName}</span>
              </a>
            </li>
          );
        } else {
          return (
            //"fas fa-th-large mr-3 text-gray"
            <li className='sidebar-list-item'>
              <a
                href='#'
                data-toggle='collapse'
                data-target={hashpage}
                aria-expanded='false'
                aria-controls={pageid}
                className='sidebar-link text-muted'
              >
                <i className={linkData.icon}></i>
                <span>{linkData.menuName}</span>
              </a>
              <div id={pageid} className='collapse'>
                <ul className='sidebar-menu list-unstyled border-left border-primary border-thick'>
                  {linkData.subMenu.map(submenu => (
                    <li className='sidebar-list-item'>
                      <Link
                        to={submenu.subMenuLink}
                        className='sidebar-link text-muted pl-lg-5'
                      >
                        {submenu.subMenuName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        }
      });
      return renderlist;
    }
  };
  render() {
    return (
      <div id='sidebar' className='sidebar py-3'>
        <ul className='sidebar-menu list-unstyled'>
          {this.renderList(this.state.role)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.authStore.isAuth
});

export default connect(
  mapStateToProps,
  null
)(SideBar);
