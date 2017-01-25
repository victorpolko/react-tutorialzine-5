import style from './ServiceComponent.sass';
import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      active: false
    };
  },

  clickHandler: function() {
    let active = !this.state.active;

    this.setState({ active: active });
    this.props.addTotal(active ? this.props.price : -this.props.price);
  },

  render: function() {
    return (
      <div className={ style.body }>
        <p className={ style.p + (this.state.active ? ' active' : '') } onClick={ this.clickHandler }>
          { this.props.name } <b>{ this.props.price.toFixed(2) }</b>
        </p>
      </div>
    );
  }
})
