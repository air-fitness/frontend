// import React, {Component, Fragment} from 'react';
// // import { Tab } from 'semantic-ui-react'

// import {NavLink} from 'react-router-dom';


// class Home extends Component {
 
//   render() {
//     // const panes = [
//     //   { menuItem: 'Classes', render: () => <Tab.Pane >Tab 1 Content</Tab.Pane > },
//     //   { menuItem: 'Instructors', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
//     //   { menuItem: 'Calendar', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
//     // ]
//     return(
//       <Fragment>  
//       <h1>Home</h1>
      
//       {/* <Tab panes={panes} /> */}
//       <div className="tabs-container">
//       <div className="tabs">
//           <div className="tab"><NavLink to='/classes' activeClassName='tab-active'>CLASSES</NavLink></div>
//           <div className="tab"><NavLink to='/instructors' activeClassName='tab-active'>INSTRUCTORS</NavLink></div>
//           <div className="tab"><NavLink to='/calendar' activeClassName='tab-active'>CALENDAR</NavLink></div>
//           <div className="tab"><NavLink to='/dashboard' activeClassName='tab-active'>DASHBOARD</NavLink></div>
//       </div>
//         <div className="tab-pane">
          
        
//         </div>
//       </div>
        
//       </Fragment>
//     )
//   }
// }
// export default Home;
import React, {Component, Fragment} from 'react';
import Tabs from './Tabs';

class Home extends Component {
  render() {
    return(
      <Fragment>
      <Tabs/>
      <h1>Home</h1>
      </Fragment>
    );
  }
}
export default Home;

