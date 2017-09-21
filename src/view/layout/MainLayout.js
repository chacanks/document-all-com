import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ReqListLayout from './ReqListLayout';

class MainLayout extends Component {

    
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});


  render() {
    return (
      <div>
        <AppBar
            title="Document-All-Com"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer 
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}>
          <MenuItem>요구사항 관리</MenuItem>
          <MenuItem>메뉴</MenuItem>
          <MenuItem>메뉴</MenuItem>
          <MenuItem>메뉴</MenuItem>
        </Drawer>
        <ReqListLayout />
      </div>
    );
  }
}

export default MainLayout;
