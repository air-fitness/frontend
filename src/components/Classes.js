// import React, { Component } from 'react';
// import Tabs from './Tabs';
// // import dummyData from '../dummyData';
// import { Card, Table, Button, Icon } from 'semantic-ui-react';
// import { connect } from 'react-redux';
// import { getClassesTypes } from '../actions/index';
// import 'semantic-ui-css/semantic.min.css'
// import ClassTypeCard from './ClassTypeCard';

// class Classes extends Component {
//   componentDidMount() {
//     this.props.getClassesTypes();
//   }

//   render() {
//     return (
//       <div className="tabs-container">
//         <Tabs />
//         <div className='classes-title'>
        
//         </div>
        
//         <div className="tab-content">
//           <div className="classes">
//             <div className="class">
//               <Table color={'teal'} inverted celled striped sortable={true} unstackable={true}>
//                 <Table.Header>
//                   <Table.Row>
//                     <Table.HeaderCell>Class Type</Table.HeaderCell>
//                     <Table.HeaderCell>Class Name</Table.HeaderCell>
//                     <Table.HeaderCell>Trainer Name</Table.HeaderCell>
//                     <Table.HeaderCell>Class Length</Table.HeaderCell>
//                     <Table.HeaderCell>Sign Up</Table.HeaderCell>
//                   </Table.Row>
//                 </Table.Header>

//                 <Table.Body>
//                   {this.props.classTypes.map((c, i) => {
//                     return (
//                       <Table.Row key={i}>
//                         <Table.Cell>{c.category_name}</Table.Cell>
//                         <Table.Cell>{c.class_name}</Table.Cell>
//                         <Table.Cell>{`${c.instructor_first_name} ${c.instructor_last_name}`}</Table.Cell>
//                         <Table.Cell>{c.duration} Minutes</Table.Cell>
//                         <Table.Cell><ClassTypeCard/></Table.Cell>
//                       </Table.Row>
//                     );
//                   })}
//                 </Table.Body>
//               </Table>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return state;
// };
// export default connect(
//   mapStateToProps,
//   {
//     getClassesTypes
//   }
// )(Classes);
//////////////////////////////////////////////////

import _ from 'lodash';
import React, { Component } from 'react';
import Tabs from './Tabs';
// import dummyData from '../dummyData';
import { Card, Table, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getClassesTypes } from '../actions/index';
import 'semantic-ui-css/semantic.min.css'
import ClassTypeCard from './ClassTypeCard';

class Classes extends Component {
  componentDidMount() {
    this.props.getClassesTypes();
  }
  
  state = {
    column: null,
    data: this.props.classTypes,
    direction: null,
  }
  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, data, direction } = this.state
    return (
      <div className="tabs-container">
        <Tabs />
        <div className='classes-title'>
        
        </div>
        
        <div className="tab-content">
          <div className="classes">
            <div className="class">
              <Table color={'teal'} inverted sortable celled striped  unstackable fixed >
                <Table.Header className='semantic-table-header-row'>
                  <Table.Row >
                    <Table.HeaderCell
                      sorted={column === 'category_name' ? direction : null}
                      onClick={this.handleSort('category_name')}                    
                    >Type</Table.HeaderCell>
                    <Table.HeaderCell
                      sorted={column === 'class_name' ? direction : null}
                      onClick={this.handleSort('class_name')}                    
                    >Title</Table.HeaderCell>
                    <Table.HeaderCell
                      sorted={column === 'instructor_first_name' ? direction : null}
                      onClick={this.handleSort('instructor_first_name')}                    
                    >Trainer First Name</Table.HeaderCell>
                    <Table.HeaderCell
                      sorted={column === 'instructor_last_name' ? direction : null}
                      onClick={this.handleSort('instructor_last_name')}                    
                    >Trainer Last Name</Table.HeaderCell>
                    <Table.HeaderCell
                      sorted={column === 'duration' ? direction : null}
                      onClick={this.handleSort('duration')}                    
                    >Length</Table.HeaderCell>
                    <Table.HeaderCell
                    >Sign Up</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {_.map(data, ({ category_name, class_name, instructor_first_name, instructor_last_name, duration, class_id }) => (
                    
                      <Table.Row key={class_id}>
                        <Table.Cell>{category_name}</Table.Cell>
                        <Table.Cell>{class_name}</Table.Cell>
                        <Table.Cell>{instructor_first_name}</Table.Cell>
                        <Table.Cell>{instructor_last_name}</Table.Cell>
                        <Table.Cell>{duration} Minutes</Table.Cell>
                        <Table.Cell><ClassTypeCard/></Table.Cell>
                      </Table.Row>
                    
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  {
    getClassesTypes
  }
)(Classes);

