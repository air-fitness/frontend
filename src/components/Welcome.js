import React, {Component, Fragment} from 'react';

class Welcome extends Component {
  render() {
    return(
      <Fragment>
      <h1>Welcome</h1>
      <div className="welcome">
        <h1>Welcome to our Awesome fitness!</h1>
        <h3>Are you an instructor or a client?</h3>
        <div className="client-button">
          <button className='welcome-button'>Client</button>
        </div>
        <div className="instructor-button">
          <button className='welcome-button'>Instructor</button>
        </div>
      </div>
      </Fragment>
    );
  }
}
export default Welcome;

