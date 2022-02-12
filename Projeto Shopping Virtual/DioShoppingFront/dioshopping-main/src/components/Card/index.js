import React from 'react';
import { Typography } from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';
import './styles.css'


const Card = ({ product, children }) => {
  const cart = useSelector( state => state.cart.value )
  const dispatch = useDispatch();

  return(
  <div className="containerProducts">
        <div className='containerImage'>
          <img width="200px" src={product.image} alt={product.name_product}/>
          <Typography variant='h6'>
            {children}
          </Typography>
          <Typography variant='subtitle1'>
            R$ {product.price.toFixed(2)}
          </Typography>
          </div>
      
          <button className="addButton"
            onClick={()=>dispatch(cartActions.Add (cart, product))}
          >
            Adicionar
          </button>
    </div>
  )
}

export default Card;
