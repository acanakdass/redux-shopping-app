import React from 'react'
import { Card, CardGroup, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ProductActions from '../../redux/actions/ProductActions'
import * as CartActions from '../../redux/actions/CartActions'


class Products extends React.Component {

   componentDidMount() {
      this.props.actions.getProducts();
      setTimeout(() => {

         console.log(this.props.products);
         console.log(this.props.cart);
      }, 2000)
   }

   addToCart = (product) => {
      this.props.actions.addToCart(product);
      console.log(this.props.cart);

   }

   render() {

      return (
         <div>
            <Row>
               {this.props.products.map(prdct => (
                  <Col key={prdct.id} className="col d-flex pb-3 ">
                     <CardGroup >
                        <Card style={{ width: '280px', height: "450px" }} >
                           <Card.Img style={{ width: '180px', height: "200px", alignSelf: "center" }} variant="top" src={prdct.image} />
                           <Card.Body className="d-flex flex-column mt-auto">
                              <Card.Title>{prdct.title.substring(0, 55)}...</Card.Title>
                              <Card.Text>
                                 {prdct.description.substring(0, 100)}...
                              </Card.Text>
                           </Card.Body>
                           <Card.Footer>
                              <Row>
                                 <Col>
                                    <Button variant="outline-primary" style={{ width: "100%" }} >{prdct.price} $</Button>
                                 </Col>
                                 <Col>
                                    <Button onClick={() => { this.addToCart(prdct) }} variant="success" style={{ width: "100%" }} >Add to Cart</Button>
                                 </Col>
                              </Row>
                           </Card.Footer>
                        </Card>

                     </CardGroup>

                  </Col>
               )
               )}
            </Row>
         </div >
      )


   }
}


const mapDispatchToProps = (dispatch) => {
   return {
      actions: {
         getProducts: bindActionCreators(ProductActions.getProducts, dispatch),
         addToCart: bindActionCreators(CartActions.addToCart, dispatch)
      }
   }
}
const mapStateToProps = (state) => {
   return {
      products: state.productsListReducer,
      cart: state.cartReducer
   }
}




export default connect(mapStateToProps, mapDispatchToProps)(Products);
