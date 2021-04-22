import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class MaterialButtons extends Component {
   render() {
      return (
         <div>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">
               Primary
</Button>
            <Button variant="contained" color="secondary">
               Secondary
</Button>
            <Button variant="contained" disabled>
               Disabled
</Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
               Link
</Button>
            <Button variant="outlined" color="secondary">
               Secondary
</Button>
            <Button variant="outlined" disabled>
               Disabled
</Button>
            <Button variant="outlined" color="primary" href="#outlined-buttons">
               Link
</Button>
            <IconButton color="secondary" aria-label="add to shopping cart">
               <AddShoppingCartIcon />
            </IconButton>
         </div>
      )
   }
}

export default MaterialButtons;