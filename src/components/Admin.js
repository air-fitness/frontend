import React, {Component} from 'react';
import Datetime from 'react-datetime';
import { connect } from "react-redux";
import { callNewClass } from '../actions/index';
import CreateClassType from './CreateClassType';


import './css/react-datetime.css'

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      createClassTitle: '',
      createClassLocation: '',
      createClassCat: '',

      startTime: '...',
      endTime: '...',
    }
  }
  handleInput = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value});
  };
  handleSelect = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  handleDateInput = (momentObj, name) => {
    console.log(momentObj.format().utc());
    // console.log(momentObj.toDate());
    this.setState({[name]: momentObj.toDate()});
  };
  handleNewClass = (e) => {
    e.preventDefault();
    const newClass = {
      start_time: this.state.startTime,
      // start_time: '2015-03-25T12:00:00Z',
      // duration: this.state.endTime,
      duration: 1,
      location: this.state.createClassLocation,
      // category_id: parseInt(this.state.createClassCat)
    }
    let history = this.props.history;
    const header = { Authorization: localStorage.getItem("jwt") };
    this.props.callNewClass(e, newClass, history, header);
    this.setState({createClassTitle: '',createClassLocation: '',createClassCat: '',startTime: '...',endTime: '...'});
  }
  render() {
    return(
      <div className="admin">
      
        <CreateClassType/>

        <div className='create-class'>
          <h5>create new class</h5>        
          <form className='create-class-form'>
            <label>Title</label>
              <input name='createClassTitle' value={this.state.createClassTitle}placeholder='...' onChange={this.handleInput} />
            <label>Location</label>
            <input name='createClassLocation' value={this.state.createClassLocation}placeholder='...' onChange={this.handleInput} />
            <label>Category</label>
              <select name='createClassCat' onChange={this.handleSelect}>
                <option value='0'>-select-</option>
                <option value='1'>Yoga</option>
                <option value='2'>Weight Training</option>
                <option value='3'>Pilates</option>
                <option value='4'>One-On-One</option>
                <option value='5'>Other</option>
              </select>
            {/* <div className="datePicker"> */}
              <label>Start Time</label>
                <Datetime 
                  value={this.state.startTime}
                  onChange={(momentObj) => {this.handleDateInput(momentObj, 'startTime')}}
                />
              <label>End Time</label>
                <Datetime 
                  value={this.state.endTime}
                  onChange={(momentObj) => {this.handleDateInput(momentObj, 'endTime')}}
                />
            {/* </div> */}
            <button onClick={this.handleNewClass}>Submit</button>
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
    callNewClass
  }
)(Admin);
