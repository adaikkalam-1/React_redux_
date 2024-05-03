import { useState } from "react" 
import { addCustomer as addCustomerAction } from "../../store/slice/customerSlice";
import {useDispatch} from "react-redux"
const CustomerAdd = () => {
  const [input,setInput]=useState("");
  const dispatch=useDispatch();
  // const[customers,setCustomers]=useState([])
 
  const addCustomer=()=>{
    if(input){
      // setCustomers((previousState)=>[...previousState,input]);
      dispatch(addCustomerAction(input))
      setInput("");
    }
  }

  return (
    <>
    <div>
      <h3>Add New Customer </h3>
      <input type="text"  value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={addCustomer}>Add</button>
    </div>
    </>
  )
}

export default CustomerAdd

