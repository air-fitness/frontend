import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Tabs extends Component {
  render() {
    return(
      <div className="tabs-container">
        <div className="tabs">
            <NavLink to='/classes' activeClassName='tab-active' className='tab'>CLASS SERIES</NavLink>
            <NavLink to='/instructors' activeClassName='tab-active' className='tab'>INSTRUCTORS</NavLink>
            <NavLink to='/calendar' activeClassName='tab-active' className='tab'>CALENDAR</NavLink>
            <NavLink to='/dashboard' activeClassName='tab-active' className='tab'>DASHBOARD</NavLink>
            <NavLink to='/admin' activeClassName='tab-active' className='tab'>TRAINER TOOLS</NavLink>
        </div>
        <div className="tab-pane">
        </div>
      </div>
    );
  }
}
export default Tabs;
