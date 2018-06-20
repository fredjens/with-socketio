import React, { Component } from 'react';
import autoBind from 'react-autobind';

import io from 'socket.io-client';

export default (Child, options) => {

  return class WithSocketIO extends Component {
    constructor(props) {
      super(props);
      autoBind(this);

      this.socket = io(options.url);

      this.state = {
        loading: true,
      };
    }

    emitMsg(channel, msg) {
      this.socket.on(channel, msg);
    }

    componentWillMount() {
      const { channels = []} = options;

      this.socket
      .on('error', error => {
        this.setState({ loading: false });
        console.log(error);
      });

      channels
      .forEach(channel => this.socket.on([channel], (data) => {
        this.setState({
          [channel]: data,
          loading: false,
        })
      }));
    }

    render() {
      return <Child {...this.state} emit={this.emitMsg} />;
    }
  }
};
