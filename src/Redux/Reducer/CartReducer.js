import {createSlice} from '@reduxjs/toolkit'

const initialState={
        cartValues:[]
}

const CartReducer=createSlice(
{
    name:'CartReducer',
    initialState,
    reducers:{
        addToCart:(state,action)=>{

        },

        removeFromCart:(state,action)=>{

        }
    }
}
)

export const{addToCart,removeFromCart}=CartReducer.reducer
export default CartReducer.reducer