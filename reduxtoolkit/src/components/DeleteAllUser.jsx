import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/userSlice";

const DeleteAllUser = () => {

  const dispatch = useDispatch();
  const DeleteAllUser = () => {
    dispatch(deleteUsers()); 
  }
    
  return (
    <button onClick={()=>{DeleteAllUser()}}>DeleteAllUser</button>
  )
}

export default DeleteAllUser;