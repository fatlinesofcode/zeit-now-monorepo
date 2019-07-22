import React, {Component} from 'react';
import PropTypes from 'prop-types';

// import classNames from 'classnames'

export class Button extends Component {

  static propTypes = {
    name: PropTypes.string,
  }
  static defaultProps = {
    name: null,
  }

  render() {
    return (
      <button className={('test')}>
        {this.props.children}
      </button>
    )
  }
}
