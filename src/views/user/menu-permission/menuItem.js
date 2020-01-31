import React, { Component } from 'react'

export default class MenuItem extends Component {
    state = {
        ischecked: false
    }

    componentWillMount() {
        this.setState({
            ischecked: this.props.menu.checked
        }
        )
    }

    toggle=(evt)=>{
        let checked= evt.target.checked;
        let value=evt.target.value;
        this.setState({
            ischecked:!this.state.ischecked
        })
        this.props.isChecked(value,checked)
    }

    render() {
        const { permissionId, menuName } = this.props.menu;
        return (
            <tr key={permissionId}>
                <td>{menuName}</td>
                <td><input type="checkbox" value={permissionId} checked={this.state.ischecked} onChange={this.toggle}/></td>
            </tr>
        )
    }
}
