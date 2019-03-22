import React, {Component} from 'react';
import Tabs from './Tabs';
// import dummyData from '../dummyData';
import { Card } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {getClassesTypes} from '../actions/index'



class Classes extends Component {
  componentDidMount() {
    this.props.getClassesTypes();
  }

  render() {
    return(
      <div className='tabs-container'>
      <Tabs/>
      <h1>Classes</h1>
      <div className="tab-content">
      <div className='classes'>
        {this.props.classTypes.map((course, index) => {
          return(
            <div className="class" key={index}>
              <Card >
                {/* <Image src='' /> */}
                <Card.Content>
                  <Card.Header>{course.class_name}</Card.Header>
                  <Card.Description>
                    <h5>Category: {`${course.category_name}`}</h5>
                    <h5>Trainer: {`${course.instructor_first_name} ${course.instructor_last_name}`}</h5>
                    <h5>Length: {course.duration} Minutes</h5>
                    
                  </Card.Description>
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
const mapStateToProps = state => {
  return state
}
export default connect(
  mapStateToProps, {
    getClassesTypes
  }
)(Classes);
