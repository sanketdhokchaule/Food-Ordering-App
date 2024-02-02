 import { useDispatch } from 'react-redux';
 import { addItem } from '../utils/cartSlice';

 const AddItem = ({item}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        // dispatch an action
        dispatch(addItem(item));
    }
    
    return(
        <div className="absolute bottom-0">
            <button onClick={()=>handleAddItem(item)} className="p-1 bg-white font-semibold text-green-600 shadow-lg mb-0">Add + </button>
        </div>
    )
 }

 export default AddItem;