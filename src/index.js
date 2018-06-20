import React, { Component } from 'react';
import autoBind from 'react-autobind';

/**
 * Import SocketIO client
 */

import io from 'socket.io-client';

export default (Child, options) => {
  return class WithSocketIO extends Component {
    constructor(props) {
      super(props);
      autoBind(this);

      /**
       * Bind SocketIO client
       */

      this.socket = io(options.url);

      this.state = {
        loading: true,
        error,
      };
    }

    /**
     * Emit message
     */

    emitMsg(channel, msg) {
      this.socket.on(channel, msg);
    }

    componentWillMount() {
      const { channels = []} = options;

      /**
       * If there is an error log the error message and stop loading
       */

      this.socket
      .on('error', error => {
        console.log(error);
        this.setState({ loading: false, error });
      });

      /**
       * Listen to all of the provided channels
       */

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
