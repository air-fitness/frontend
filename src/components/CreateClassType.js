import React, { Component } from "react";
import {connect} from 'react-redux';
import {callNewClassType} from '../actions/index';

class CreateClassType extends Component {
  constructor() {
    super();
    this.state = {
      classTitle: '',
      categoryId: '',
      duration: '',
      categories: [
        {
          categoryId: 1,
          categoryName: 'Yoga'
        },
        {
          categoryId: 2,
          categoryName: 'Weight Training'
        },
        {
          categoryId: 3,
          categoryName: 'Cardio'
        },
        {
          categoryId: 4,
          categoryName: 'One-on-One'
        },
        {
          categoryId: 5,
          categoryName: 'Other'
        },
      ]
    }
  }
  handleInput = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value});
  };
  handleSelect = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    const history = this.props.history;
    const header = { Authorization: localStorage.getItem("jwt") };
    const newClass = {
      category_id: parseInt(this.state.categoryId),
      duration: parseInt(this.state.duration),
      class_name: this.state.classTitle
    }
    this.props.callNewClassType(e, newClass, history, header);
    this.setState({classTitle:'',categoryId:'',duration:''});
  }
  render() {
    return(
      <div className="create-class-type">
        <form className='create-class-type-form'>

          <label>Class Series Name</label>
            <input name='classTitle' value={this.state.classTitle} onChange={this.handleInput} placeholder='...' />

          <label>Duration</label>
            <input name='duration' value={this.state.duration} onChange={this.handleInput} placeholder='...' />

          <label>Class Category</label>
            <select name='categoryId' onChange={this.handleSelect}>
              <option value="0">--select-</option>
              {this.state.categories.map((cat, index) =>{
                return(
                  <option key={index} value={cat.categoryId}>{cat.categoryName}</option>
                  )
              })}
            </select>

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <br/>
        <br/>
        <br/>
      </div>
      
    )
  }
}
const mapStateToProps = state => {
  return state;
}
export default connect(
  mapStateToProps, {
    callNewClassType
  }
)(CreateClassType);

