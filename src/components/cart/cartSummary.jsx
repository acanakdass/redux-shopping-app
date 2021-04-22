import React from 'react'
import { Table, Button } from 'react-bootstrap';
import { Row, Col, Container } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as CartActions from '../../redux/actions/CartActions'
import * as ProductActions from '../../redux/actions/ProductActions'


class cartSummary extends React.Component {

   componentDidMount() {
      console.log(this.props.cart);
   }


   render() {
      return (
         <div>
            <Container className="mt-5">

               <Table striped bordered hover>
                  <thead>
                     <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.props.cart.map(cartItem => (

                        <tr>
                           <td>{cartItem.id}</td>
                           <td><img style={{ width: "70px" }} src={cartItem.image} alt="" /></td>
                           <td>{cartItem.title}</td>
                           <td>{cartItem.description}</td>
                           <td>{cartItem.price} $</td>
                        </tr>
                     ))}
                  </tbody>
               </Table>
            </Container>
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      actions: {
         removeFromCart: bindActionCreators(CartActions.removeFromCart, dispatch)
      }
   }
}
const mapStateToProps = (state) => {
   return {
      cart: state.cartReducer
   }
}




export default connect(mapStateToProps, mapDispatchToProps)(cartSummary);
