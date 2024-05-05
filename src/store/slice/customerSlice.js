import { createSlice } from "@reduxjs/toolkit";

const initialState ={customer:[],user:[]}
const customerSlice=createSlice({
    name:"customer",
    initialState,
    reducers:{
        addCustomer(state,action) {
            state.customer.push(action.payload)

        },
        deleteCustomer(state,action){
            const deleteIndex=action.payload;
            return state.customer.filter((val,index)=>index !== deleteIndex)

        }
    }
})
const userSlice=createSlice({

})
export const {addCustomer,deleteCustomer}=customerSlice.actions
export default customerSlice.reducer