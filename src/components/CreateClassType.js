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
      category: [
        {
          id: 1,
          catName: 'Yoga',
        },
        {
          id: 2,
          catName: 'One-on-One',
        },
        {
          id: 3,
          catName: 'Other',
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
        <h3 className='h3'>Create a Class Series</h3>
        <form className='create-class-type-form'>

          <label>Class Series Name</label>
            <input name='classTitle' value={this.state.classTitle} onChange={this.handleInput} placeholder='...' />
          <br/>
          <label>Duration</label>
            <input name='duration' value={this.state.duration} onChange={this.handleInput} placeholder='...' />
          <br/>
          <label>Class Category</label>
            <select name='categoryId' onChange={this.handleSelect}>
              <option value="0">--select-</option>


              {this.state.category.map((cat, index) =>{
                return(
                  <option key={index} value={cat.id}>{cat.catName}</option>
                  )
              })}
            </select>

          <button className='admin-button' onClick={this.handleSubmit}>Submit</button>
        </form>
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

