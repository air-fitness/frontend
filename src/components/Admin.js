import React, {Component} from 'react';
import Datetime from 'react-datetime';
import { connect } from "react-redux";
import { callScheduleClass } from '../actions/index';
import CreateClassType from './CreateClassType';


import './css/react-datetime.css'
// import moment from 'moment';

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      scheduleClassLocation: '',
      scheduleClassId: '',
      startTime: '...',
      endTime: '...',
    }
  }
  handleInput = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value});
  };
  handleSelect = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value});
  }
  handleDateInput = (momentObj, name) => {
    // console.log(momentObj.utc().format());
    
      this.setState({[name]: momentObj.utc().format()});
  };
  handleScheduleClass = (e) => {
    e.preventDefault();
    // console.log('here',this.state.scheduleClassId);
    const newScheduledClassId = this.state.scheduleClassId;
    const newClass = {
      start_time: this.state.startTime,
      end_time: this.state.endTime,
      location: this.state.scheduleClassLocation,
    }
    let history = this.props.history;
    const header = { Authorization: localStorage.getItem("jwt") };
    this.props.callScheduleClass(e, newClass, history, header, newScheduledClassId);
    this.setState({scheduleClassLocation:'',scheduleClassId:'',startTime:'...',endTime: '...',});
  }
  render() {
    return(
      <div className="admin">
      
        <CreateClassType/>
        
        <div className='create-class'>
          <div className='h3'>
            <h3>Schedule a class</h3>
          </div>
          <form className='create-class-form'>
            {/* <label>Title</label>
              <input name='createClassTitle' value={this.state.createClassTitle}placeholder='...' onChange={this.handleInput} /> */}
            
            <label>Select a Class Type</label>
              <select name='scheduleClassId' onChange={this.handleSelect}>
                {this.props.classTypes.map((c, i) => {
                  return(
                    <option key={i}value={c.class_id}>{`${c.class_name} - ${c.category_name} - ${c.instructor_first_name} ${c.instructor_last_name}`}</option>
                  )
                })}
              </select>
              <br/>
              <label>Location</label>
            <input name='scheduleClassLocation' value={this.state.scheduleClassLocation}placeholder='...' onChange={this.handleInput} />
            <br/>
            <div className="datePicker">
              
              
              <span>
              <div>Start Time</div>
                <Datetime
                  
                  value={this.state.startTime}
                  onChange={(momentObj) => {this.handleDateInput(momentObj, 'startTime')}}
                />
             
             <div>End Time</div>
                <Datetime
                  value={this.state.endTime}
                  onChange={(momentObj) => {this.handleDateInput(momentObj, 'endTime')}}
                />
                </span>
            </div>
            <button className='admin-button' onClick={this.handleScheduleClass}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return state;
}
export default connect(
  mapStateToProps, {
    callScheduleClass
  }
)(Admin);
