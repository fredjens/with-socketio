# SocketIO HOC

> [SocketIO](https://socket.io) as a React Higher Order Component

[![NPM](https://img.shields.io/npm/v/with-socketio.svg)](https://www.npmjs.com/package/with-socketio)

## Install

```bash
yarn add with-socketio
```

## Usage

This is being used as an [Higher Order Component](https://reactjs.org/docs/higher-order-components.html).

```jsx
import React, { Component } from 'react'

import WithSocketIO from 'with-socketio';

class MyComponent extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}

WithSocketIO(MyComponent, { url, channels });
```
Options:
```
url: The url to your SocketIO server (@string)
channels: The channles you want to listen to (@array)
```

### Props
Your components props:
```
emit: Emit a message (@func)
[channels]: Your channels (@obj)
```

### Emit message

This is how you emit a message:
```
this.props.emit('channel', 'Hello, Channel!');
```

## License

MIT © [fredjens](https://github.com/fredjens)
