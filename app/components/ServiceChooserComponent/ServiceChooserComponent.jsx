import style from './ServiceChooserComponent.sass';
import Service from '../ServiceComponent/ServiceComponent.jsx';
import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      total: 0
    }
  },

  addTotal: function(price) {
    this.setState({
      total: this.state.total + price
    });
  },

  render: function() {
    let services = this.props.items.map((ser, index) => {
      return (
        <Service name={ ser.name } price={ ser.price } active={ ser.active } addTotal={ this.addTotal } key={ index }/>
      );
    });

    return (
      <div className={ style.body }>
        <h1 className={ style.h1 }>Our Services</h1>

        <div className={ style.services }>
          { services }

          <p className={ style.total }>
            Total <b>${ this.state.total.toFixed(2) }</b>
          </p>
        </div>
      </div>
    );
  }
})
