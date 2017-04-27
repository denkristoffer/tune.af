/* @flow */

// Based on react-router's Link component
// https://github.com/ReactTraining/react-router/blob/e06190e06a7cebcced96aa708be83174176186a0/modules/Link.js

import React from 'react';
import { history } from '../../History';

type Props = {
  to: string,
  onClick?: Function,
};

class Link extends React.Component {
  props: Props;

  isLeftClickEvent = (event: Object) => event.button === 0;

  isModifiedEvent = (event: Object) =>
    !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

  handleClick(event: Object) {
    if (this.props.onClick && this.props.onClick !== null) {
      this.props.onClick(event);
    }

    if (event.defaultPrevented) {
      return;
    }

    if (this.isModifiedEvent(event) || !this.isLeftClickEvent(event)) {
      return;
    }

    // If target prop is set (e.g. to "_blank"), let browser handle link.
    if (this.props.target) {
      return;
    }

    event.preventDefault();
    history.push(this.props.to);
  }

  render() {
    const { to, ...props } = this.props;

    return <a href={to} {...props} onClick={this.handleClick.bind(this)} />;
  }
}

export default Link;
