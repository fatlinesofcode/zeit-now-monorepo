import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import {Button} from "../shared/Button";

export class Header extends Component {

  static propTypes = {
    name: PropTypes.string,
  }
  static defaultProps = {
    name: null,
  }

  render() {
    return (
      <section className={classNames('header')}>
        <Button>test 2</Button>
      </section>
    )
  }
}
