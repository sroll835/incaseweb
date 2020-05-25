const initialState = {
    user_id: ""
} 
const ADD_USER_ID  = 'ADD_USER_ID';
function AddUserId(state = initialState,action){ 
    let nextState;
    switch(action.type){ 
        case ADD_USER_ID:
        nextState={ ...state,
            user_id: action.payload 

        } 
        return nextState || state;
        
        default: 
        console.log("entre default")
        return state
    } 
} 

export default AddUserId