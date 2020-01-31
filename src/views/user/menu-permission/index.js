import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPermission,
  updatePermission
} from "../../../_actions/permission-action";
import MenuItem from "./menuItem";

class MenuPermission extends Component {
  state = {
    menus: []
  };

  componentDidMount() {
    this.props.getpermission(this.props.match.params.id);
  }

  componentWillReceiveProps(nextprops) {
    this.setState({
      menus: nextprops.permissions
    });
  }

  changePermission = (permissionId, checked) => {
    const permissionDto = {
      checkstatus: checked,
      roleId: this.props.match.params.id
    };

    // console.log(permissionId, permissionDto);
    this.props.updatePermission(permissionId, permissionDto);
  };

  renderList() {
    return this.state.menus.map(menu => (
      <MenuItem menu={menu} isChecked={this.changePermission} />
    ));
  }

  render() {
    return (
      <div>
        <h2>Menu Permission</h2>
        <table className='table'>{this.renderList()}</table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  permissions: state.permissionStore.permissions
});
const mapDispachToProps = dispatch => ({
  getpermission: roleid => dispatch(getPermission(roleid)),

  updatePermission: (permissionId, permissionDto) =>
    dispatch(updatePermission(permissionId, permissionDto))
});

export default connect(
  mapStateToProps,
  mapDispachToProps
)(MenuPermission);
