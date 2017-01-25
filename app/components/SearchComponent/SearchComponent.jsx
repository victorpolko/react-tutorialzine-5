import style from './SearchComponent.sass';
import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      searchString: ''
    }
  },

  handleChange: function(e) {
    this.setState({
      searchString: e.target.value
    });
  },

  render: function() {
    let libraries = this.props.items;
    let searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      libraries = libraries.filter(function(lib) {
        return (
          // Check name and url
          lib.name.toLowerCase().match(searchString) || lib.url.toLowerCase().match(searchString)
        );
      });
    }

    return (
      <div className={ style.body }>
        <input className={ style.input } type="text" value={ this.state.searchString } onChange={ this.handleChange } placeholder="Type here"/>

        <ul className={ style.ul }>
          {
            libraries.map((lib, index) => {
              return (
                <li className={ style.li } key={ index }>
                  <div className={ style.link }>{ lib.name }</div>
                  <a href={ lib.url } target="_blank">{ lib.url }</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
})
