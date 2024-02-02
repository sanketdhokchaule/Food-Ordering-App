import { useDispatch } from 'react-redux';
 import { deleteItem } from '../utils/cartSlice';

 const DeleteItem = ({index}) => {

    const dispatch = useDispatch();

    const handleDeleteItem = (index) =>{
        // dispatch an action
        dispatch(deleteItem(index));
    }
    
    return(
        <div className="m-2 p-2 flex justify-center">
            <button onClick={()=>handleDeleteItem(index)}>✖</button>
        </div>
    )
 }

 export default DeleteItem;