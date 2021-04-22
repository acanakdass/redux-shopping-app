import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as CategoryActions from '../../redux/actions/CategoryActions'

class Categories extends React.Component {
   componentDidMount() {

       this.props.actions.getCategories();
      console.log(this.props.categories);

   }
   render() {
      return (
         <div>
            <ListGroup>
                  {this.props.categories.map(category => (
                      <ListGroupItem key={category.length}>{category}</ListGroupItem>
               ))}
            </ListGroup>
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      actions: {
         getCategories: bindActionCreators(CategoryActions.getCategories, dispatch),
      }
   }
}
const mapStateToProps = (state) => {
   return {
      categories: state.categoriesReducer
   }
}




export default connect(mapStateToProps, mapDispatchToProps)(Categories);
