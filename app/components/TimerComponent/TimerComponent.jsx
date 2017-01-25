import style from './TimerComponent.sass';
import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      elapsed: 0
    };
  },

  componentDidMount: function() {
    this.timer = setInterval(this.tick, 50);
  },

  componentWillUnmount: function() {
    clearInterval(this.timer);
  },

  tick: function() {
    this.setState({
      elapsed: new Date() - this.props.start
    });
  },

  render: function() {
    let elapsed = Math.round(this.state.elapsed / 100);
    let passed = (elapsed / 10).toFixed(1);

    return (
      <div className={ style.body }>
        <p className={ style.p }>
          This example was started <span className={ style.b }>{ passed }</span> seconds ago.
        </p>
      </div>
    );
  }
})
