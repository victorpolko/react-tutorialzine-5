import style from './FirstComponent.sass';
import React from 'react';

// Alternative way to create Components, but it doesn't allow for mixinss
//
// export default class FirstComponent extends React.Component {
//   render() {
//     return (
//       <div className="MyComponent-wrapper">
//         <h1>Hello world</h1>
//       </div>
//     )
//   }
// }


export default React.createClass({
  render: function() {
    return (
      <div className={ style.FirstComponent }>
        <h1>Hello world</h1>
      </div>
    );
  }
})
