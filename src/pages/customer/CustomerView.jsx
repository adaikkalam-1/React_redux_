import {useSelector} from 'react-redux'
import { deleteCustomer } from '../../store/slice/customerSlice';
import {useDispatch} from 'react-redux'
const CustomerView = () => {
    const customers= useSelector((state)=>state.customer)
    const dispatch=useDispatch();
   const deleteHandler=(index)=>{
    dispatch(deleteCustomer(index))
   }
    
    return (
      <div>
        <h3>Customer view</h3>
        <ul style={{listStyle:'none'}}>
          {
            customers.map((customer,index) => 
             <li key={index}>{customer}  <button onClick={()=>deleteHandler(index)}>delete</button></li>
            )
          }
        </ul>
      </div>
    );
  };
  
  export default CustomerView;
  