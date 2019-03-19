import React, {Component, Fragment} from 'react';
import Tabs from './Tabs';
import dummyData from '../dummyData';
import { Card, Icon, Image } from 'semantic-ui-react'


class Instructors extends Component {
  render() {
    return(
      <div className='tabs-container'>
      <Tabs/>
      <h1>Instructors</h1>
      <div className="tab-content">
      <div className='instructors'>
        {dummyData.instructors.map((instructor, index) => {
          return(
            <div className="instructor">
              <Card>
                <Image src='' />
                <Card.Content>
                  <Card.Header>{`${instructor.firstName} ${instructor.lastName}`}</Card.Header>
                  <Card.Description>{instructor.bio}</Card.Description>
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
export default Instructors;
