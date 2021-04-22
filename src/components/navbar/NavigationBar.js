import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as CartActions from '../../redux/actions/CartActions'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { FiShoppingCart } from 'react-icons/fi';


const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -5,
        top: 13,
        border: `1px  ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);


class NavigationBar extends React.Component {

    componentDidMount() {
        console.log(this.props.cart);
    }
      
    render() {

      return (
         <div>
            <Navbar bg="primary" variant="dark">
               <Navbar.Brand href="#home">
                  <Link to={"/"}>
                     Shopping App
                  </Link>
               </Navbar.Brand>
               <Nav className="mr-auto">
               </Nav>
                  <IconButton aria-label="cart">
                      <StyledBadge badgeContent={this.props.cart.length} color="error">
                          <ShoppingCartIcon style={{color:"white"}} />
                      </StyledBadge>
                  </IconButton>
               <NavDropdown id="collasible-nav-dropdown">
                      {this.props.cart.map(item => (

                          <NavDropdown.Item key={item.id } >{item.title}</NavDropdown.Item>
                  ))}
                  <NavDropdown.Divider />
                  <NavDropdown.Item><Link to={"/cart"}><b>Go to Cart</b></Link></NavDropdown.Item>
               </NavDropdown>

               <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
               </Form>
            </Navbar>
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




export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
