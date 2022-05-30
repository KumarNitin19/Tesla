import  {createSlice} from '@reduxjs/toolkit';


const initialState ={
    cars: ["Model S","Model Y","Model 3","Model X","Solar Roofs","Solar Panels"]
}


const carSlice = createSlice({
    
         name: "cars",
         initialState,
         reducers: {}
})


export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;