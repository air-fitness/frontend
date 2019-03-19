import React, {Component, Fragment} from 'react';
import { Tab } from 'semantic-ui-react'


class Home extends Component {
 
  render() {
    const panes = [
      { menuItem: 'Classes', render: () => <Tab.Pane >Tab 1 Content</Tab.Pane > },
      { menuItem: 'Instructors', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      { menuItem: 'Calendar', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ]
    return(
<Fragment>  
      <h1>Home</h1>
      
      <Tab panes={panes} />
      </Fragment>
    )
  }
}
export default Home;
