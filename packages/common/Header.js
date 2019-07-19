import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from "@zeit-now-monorepo/shared/Button";
import classNames from 'classnames'

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
