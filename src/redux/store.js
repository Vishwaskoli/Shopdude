import { configureStore } from "@reduxjs/toolkit";
import cartSystem from './slice'


export const store= configureStore({

    reducer:{
            cart:cartSystem
    }



})





