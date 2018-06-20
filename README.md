# With SocketIO

> React [Higher Order Component](https://reactjs.org/docs/higher-order-components.html) for [SocketIO](https://socket.io)

[![NPM](https://img.shields.io/npm/v/with-socketio.svg)](https://www.npmjs.com/package/with-socketio)

## Install

```bash
yarn add with-socketio
```

## Usage

Use it like this:

```jsx
import React, { Component } from 'react'
import WithSocket from 'with-socketio';

class MyComponent extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}

WithSocket(MyComponent, { url, channels });
```

* url: The url to your SocketIO server (@string)
* channels: The channles you want to listen to (@array)


### Props

This HoC adds the props to your component:

```
[channels]: Your channels (@obj)
emit: Emit a message (@func)
```

### Emit message

You can also emit messages to a channel:

```
this.props.emit('channel-name', 'Hello, Channel!');
```

#### License

MIT © [fredjens](https://github.com/fredjens)
