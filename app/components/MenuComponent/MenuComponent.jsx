import style from './MenuComponent.sass';
import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      focused: 0
    };
  },

  clicked: function(index) {
    this.setState({
      focused: index
    });
  },

  render: function() {
    return (
      <div className={ style.body }>
        <ul className={ style.ul }>
          {
            this.props.items.map((item, index) => {
              let focused = this.state.focused == index ? ' focused' : '';

              // 'key' prop is essential for recurring elements. It should be unique.
              return <li className={ style.li + focused } onClick={ this.clicked.bind(this, index) } key={ index }>{ item }</li>
            })
          }
        </ul>

        <p>Selected: { this.props.items[this.state.focused] }</p>
      </div>
    );
  }
})
