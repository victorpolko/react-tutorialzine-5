'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './components/FirstComponent/FirstComponent.jsx';
import TimerComponent from './components/TimerComponent/TimerComponent.jsx';
import MenuComponent from './components/MenuComponent/MenuComponent.jsx';
import SearchComponent from './components/SearchComponent/SearchComponent.jsx';
import ServiceChooserComponent from './components/ServiceChooserComponent/ServiceChooserComponent.jsx';
import ServiceComponent from './components/ServiceComponent/ServiceComponent.jsx';
import PictureComponent from './components/PictureComponent/PictureComponent.jsx';
import PictureListComponent from './components/PictureListComponent/PictureListComponent.jsx';

ReactDOM.render(<FirstComponent/>, document.getElementById('FirstComponent'))

ReactDOM.render(
  <TimerComponent start={ Date.now() } />,
  document.getElementById('TimerComponent')
);

ReactDOM.render(
  <MenuComponent items={ ['Home', 'Services', 'About', 'Contact us'] } />,
  document.getElementById('MenuComponent')
);

let libraries = [
  { name: 'Backbone.js', url: 'http://backbonejs.org/'},
  { name: 'AngularJS',   url: 'https://angularjs.org/'},
  { name: 'jQuery',      url: 'http://jquery.com/'},
  { name: 'Prototype',   url: 'http://www.prototypejs.org/'},
  { name: 'React',       url: 'http://facebook.github.io/react/'},
  { name: 'Ember',       url: 'http://emberjs.com/'},
  { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
  { name: 'Dojo',        url: 'http://dojotoolkit.org/'},
  { name: 'Mootools',    url: 'http://mootools.net/'},
  { name: 'Underscore',  url: 'http://documentcloud.github.io/underscore/'},
  { name: 'Lodash',      url: 'http://lodash.com/'},
  { name: 'Moment',      url: 'http://momentjs.com/'},
  { name: 'Express',     url: 'http://expressjs.com/'},
  { name: 'Koa',         url: 'http://koajs.com/'}
];

ReactDOM.render(
  <SearchComponent items={ libraries }/>,
  document.getElementById('SearchComponent')
);

let services = [
  { name: 'Web Development', price: 300 },
  { name: 'Design',          price: 400 },
  { name: 'Integration',     price: 250 },
  { name: 'Training',        price: 220 }
];

ReactDOM.render(
  <ServiceChooserComponent items={ services }/>,
  document.getElementById('ServiceChooserComponent')
);

// Pictures from Instagram
ReactDOM.render(
  <PictureListComponent apiKey="642176ece1e7445e99244cec26f4de1f" />,
  document.getElementById('PictureListComponent')
);
