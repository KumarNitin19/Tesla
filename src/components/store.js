import  {configureStore} from '@reduxjs/toolkit';
import userReducer from "../userSlice"
import carReducer from "../carSlice"



export const store = configureStore({

    reducer: {
        car: carReducer,
        user: userReducer
    }
})

