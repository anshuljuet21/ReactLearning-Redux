import React from 'react'
import ProductsData from '../Data/ProductData.json'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../Redux/Reducer/CartReducer'

const Product = () => {
    const dispatch=useDispatch()
  return (
    <div className='container mt-5'>
        <div className='row'>
            {
                ProductsData.Products.map((prod,i)=>
                <div className='col' key={i}>
                    <div className='card'>
                        <img src='https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg' width={"100"}/>
                        <p className='card-title'>
                            {prod.name}|{prod.price}
                        </p>
                    </div>
                    <div className='card-body mt-2'>
                        <button className='btn btn-primary' 
                        onClick={()=>dispatch(addToCart({name:prod.name,price:prod.price}))}>Add</button>
                        &nbsp;
                        <button  className='btn btn-primary' 
                        onClick={()=>dispatch(removeFromCart({name:prod.name,price:prod.price}))}>Remove</button>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Product