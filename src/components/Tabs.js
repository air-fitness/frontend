import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';


class Tabs extends Component {
 
  render() {
    return(
      <div className="tabs-container">
        <div className="tabs">
            {/* <div className="tab"><NavLink to='/classes' activeClassName='tab-active'>CLASSES</NavLink></div>

            <div className="tab"><NavLink to='/instructors' activeClassName='tab-active'>INSTRUCTORS</NavLink></div>
            <div className="tab"><NavLink to='/calendar' activeClassName='tab-active'>CALENDAR</NavLink></div>
            <div className="tab"><NavLink to='/dashboard' activeClassName='tab-active'>DASHBOARD</NavLink></div> */}
            <NavLink to='/classes' activeClassName='tab-active' className='tab'>CLASSES</NavLink>
            <NavLink to='/instructors' activeClassName='tab-active' className='tab'>INSTRUCTORS</NavLink>
            <NavLink to='/calendar' activeClassName='tab-active' className='tab'>CALENDAR</NavLink>
            <NavLink to='/dashboard' activeClassName='tab-active' className='tab'>DASHBOARD</NavLink>

        </div>
        <div className="tab-pane">
        </div>
      </div>
    );
  }
}
export default Tabs;
