import style from './PictureComponent.sass';
import React from 'react';

export default React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
    height: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    user: React.PropTypes.string.isRequired,
    likes: React.PropTypes.number.isRequired,
    comments: React.PropTypes.number.isRequired
  },

  clickHandler: function() {
    this.props.onClick(this.props.id);
  },

  render: function() {
    let className = style.picture + (this.props.favorite ? ' favorite' : '');

    return (
      <div className={ className } onClick={ this.clickHandler }>
        <img src={ this.props.src } height={ this.props.height } alt={ this.props.title } title={ this.props.title }/>
        <div className={ style.caption }>
          <div className={ style.username }>{ this.props.user }</div>
          <div className={ style.likes }>{ this.props.likes }</div>
          <div className={ style.comments }>{ this.props.comments }</div>
        </div>
      </div>
    );
  }
})
