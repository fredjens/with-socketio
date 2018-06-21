import React from 'react';
import ReactDOM from 'react-dom';

import withSocket from './index';
import { shallow } from 'enzyme';

const ChildComponent = props => null;

describe('CallToAction component', () => {
  /**
   * Error case
   */

  it('Render the component', () => {
    const ConditionalComponent = withSocket(ChildComponent);

    const wrapper = shallow(
      <ConditionalComponent condition={true} />
    );

    expect(wrapper.html()).not.toBe(null);
  });

  /**
   * Success case
   */

  it('Render the component with props', () => {
    const ConditionalComponent = withSocket(ChildComponent, {
      url: 'mock-url',
      channels: ['test-channel'],
    });

    const wrapper = shallow(
      <ConditionalComponent condition={true} />
    );

    expect(wrapper.props()).toHaveProperty('test-channel');
  });
});

