import {configureStore} from '@reduxjs/toolkit'
import CartReducer from "../Reducer/CartReducer";

export const MyStore=configureStore({
    reducer:{
        CartReducer:CartReducer
    }
}

)