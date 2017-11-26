import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import LoginAppBar from './Componenets/LoginMenuBar'
import Logged from './Componenets/Logged'
import IconButton from 'material-ui/IconButton';

import Toggle from 'material-ui/Toggle';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class MenuAppBar extends Component {
  state = {
    logged: false,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  getChildContext() {
    return {
      muiTheme: getMuiTheme(lightTheme)
    };
  }

  render() {
    return (
      <div>
        {/*<Toggle*/}
          {/*label="Logged"*/}
          {/*defaultToggled={true}*/}
          {/*onToggle={this.handleChange}*/}
          {/*labelPosition="right"*/}
          {/*style={{margin: 20}}*/}
        {/*/>*/}
        <AppBar
          // title="Title"
          showMenuIconButton={false}
          // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.state.logged ? <Logged /> : <LoginAppBar />}
        />
      </div>
    );
  }
}

MenuAppBar.childContextTypes = {
  muiTheme: PropTypes.object
};

export default MenuAppBar;
