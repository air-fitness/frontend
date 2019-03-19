import React, {Component, Fragment} from 'react';
import Tabs from './Tabs';
import dummyData from '../dummyData';
import { Card, Icon, Image } from 'semantic-ui-react'


class Classes extends Component {
  render() {
    return(
      <div className='tabs-container'>
      <Tabs/>
      <h1>Classes</h1>
      <div className="tab-content">
      <div className='classes'>
        {dummyData.classes.map((course, index) => {
          return(
            <div className="class">
              <Card>
                <Image src='' />
                <Card.Content>
                  <Card.Header>{course.title}</Card.Header>
                  <Card.Description>{course.description}</Card.Description>
                </Card.Content>
              </Card>
            </div>
          ) 
        })}
      </div>
      </div>
      </div>
    );
  }
}
export default Classes;
