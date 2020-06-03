const initialState = {
    user_id: "",
    curso:{}  
} 
const ADD_USER_ID  = 'ADD_USER_ID';
const ADD_CURSOS = 'ADD_CURSOS';
function AddUserId(state = initialState,action){ 
    let nextState;
    switch(action.type){ 
        case ADD_USER_ID:
        nextState={ ...state,
            user_id: action.payload 

        } 
        return nextState || state;
        case ADD_CURSOS:
        nextState={ ...state,
                curso: action.payload 
    
        } 
        return nextState || state;
            
      
        
        default: 
        console.log("entre default")
        return state
    } 
} 

export default AddUserId;


