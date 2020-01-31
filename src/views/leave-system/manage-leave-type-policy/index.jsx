import React, { Component } from "react";

import Card from "../../../commons/card";
import ManageLeaveTypes from "./leave-types";

export default class ManageLeaveTypesAndPolicies extends Component {
  render() {
    return (
      <div>
        <section class='py-3'>
          <Card title='Leave Types & Rules for Allocation'>
            <ManageLeaveTypes />
          </Card>
        </section>
      </div>
    );
  }
}
{
  /* //export default LeaveConfiguration; */
}
