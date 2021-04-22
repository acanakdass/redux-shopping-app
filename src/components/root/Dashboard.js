import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import Categories from '../categories/Categories';
import Products from '../products/Products';



function Dashboard() {
   return (
      <div>
         <>
            <div className="mt-5 mr-auto ml-auto row">
               <Col xs="2">
                  <Categories />
               </Col>
               <Col xs="10">
                  <Products />
               </Col>
            </div >
         </>
      </div >


   );
}
export default Dashboard;