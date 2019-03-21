import React, {Component} from 'react';
import Tabs from './Tabs';
// import dummyData from '../dummyData';
import { Card } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {getClasses} from '../actions/index'



class Classes extends Component {
  componentDidMount() {
    this.props.getClasses();
  }

  render() {
    return(
      <div className='tabs-container'>
      <Tabs/>
      <h1>Classes</h1>
      <div className="tab-content">
      <div className='classes'>
        {this.props.allClasses.map((course, index) => {
          return(
            <div className="class" key={index}>
              <Card >
                {/* <Image src='' /> */}
                <Card.Content>
                  <Card.Header>{course.class_name}</Card.Header>
                  <Card.Description>
                    <h5>category_id: {course.category_id}</h5>
                    <h5>instructor_id: {course.instructor_id}</h5>
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
    getClasses
  }
)(Classes);
