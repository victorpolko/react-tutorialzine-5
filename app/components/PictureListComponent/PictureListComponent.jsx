import style from './PictureListComponent.sass';
import React from 'react';
import Picture from '../PictureComponent/PictureComponent.jsx';
import $ from 'jquery';

export default React.createClass({
  getInitialState: function() {
    // The pictures array will be populated via AJAX, and
    // the favorites one — when the user clicks on an image:
    return {
      pictures:  [],
      favorites: []
    }
  },

  loadPictures: function() {
    // API endpoint for Instagram's popular images for the day
    let url = `https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=${ this.props.access_token }`;

    $.getJSON(url, (result) => {
      if (!result || !result.data || !result.data.length) {
        return
      }

      let pictures = result.data.map((picture) => {
        return {
          id: picture.id,
          url: picture.link,
          src: picture.images.low_resolution.url,
          height: picture.images.low_resolution.height,
          title: picture.caption ? picture.caption.text : '',
          user: picture.user.username,
          likes: picture.likes.count,
          comments: picture.comments.count,
          favorite: false
        }
      });

      // Update the component's state. This will trigger a render.
      // Note that this only updates the pictures property, and does
      // not remove the favorites array.
      this.setState({ pictures: pictures });
    });
  },

  // When the component loads, send a jQuery AJAX request
  componentDidMount: function() {
    this.loadPictures();
  },

  pictureClick: function(id) {
    // id holds the ID of the picture that was clicked.
    // Find it in the pictures array, and add it to the favorites
    let pictures = this.state.pictures;
    let favorites = this.state.favorites;

    for (let i = 0; i < pictures.length; i++) {
      // Find the id in the pictures array
      if (pictures[i].id == id) {
        if (pictures[i].favorite) {
          return this.favoriteClick(id);
        }

        // Add the picture to the favorites array,
        // and mark it as a favorite:

        favorites.push(pictures[i]);
        pictures[i].favorite = true;

        break;
      }
    }

    this.setState({
      pictures: pictures,
      favorites: favorites
    });
  },

  favoriteClick: function(id) {
    // Find the picture in the favorites array and remove it. After this,
    // find the picture in the pictures array and mark it as a non-favorite.
    let pictures = this.state.pictures;
    let favorites = this.state.favorites;
    let index = 0;

    for (let i = 0; i < pictures.length; i++) {
      if (pictures[i].id == id) {
        pictures[i].favorite = false;
        break;
      }
    }

    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id == id) {
        index = i;
        break;
      }
    }

    // Remove the picture from favorites array
    favorites.splice(index, 1);

    this.setState({
      pictures: pictures,
      favorites: favorites
    });
  },


  render: function() {
    let pictures = this.state.pictures.map((picture, index) => {
      return (
        <Picture
          id={ picture.id }
          src={ picture.src }
          title={ picture.title }
          favorite={ picture.favorite }
          height={ picture.height }
          user={ picture.user }
          likes={ picture.likes }
          comments={ picture.comments }
          onClick={ this.pictureClick }
          key={ index }
        />
      );
    });

    if (!pictures.length) {
      pictures = <p>Loading images..</p>
    }

    let favorites = this.state.favorites.map((picture, index) => {
      return (
        <Picture
          id={ picture.id }
          src={ picture.src }
          title={ picture.title }
          favorite={ picture.favorite }
          height={ picture.height }
          user={ picture.user }
          likes={ picture.likes }
          comments={ picture.comments }
          onClick={ this.favoriteClick }
          key={ index }
        />
      );
    });

    if (!pictures.length) {
      favorites = <p>Click an image to mark it as your favorite.</p>
    }

    return (
      <div className={ style.body }>
        <h1 className={ style.h1 } onClick={ this.loadPictures }>Popular Instagram pics</h1>
        <button onClick={ this.loadPictures }>↻</button>

        <div className={ style.pictures }>
          { pictures }
        </div>
        <button onClick={ this.loadPictures }>↻</button>

        <h1 className={ style.h1 }>Your Favorites</h1>
        <div className={ style.favorites }>
          { favorites }
        </div>
      </div>
    );
  }
})
