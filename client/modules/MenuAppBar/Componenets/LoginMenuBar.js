import React, {Component} from 'react';
import { Link } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class LoginAppBar extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <Link to={'/login'}>
        <FlatButton {...this.props} label="Login" />
      </Link>
    );
  }
}

export default LoginAppBar;
