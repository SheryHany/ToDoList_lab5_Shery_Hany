
export default (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, data: [...state.data, action.data] };

        case 'COMPLETED_TASK':
            const newArray = state.data.slice();
            const compTask = newArray.find(a => a.id === action.completedId);
            compTask.completed = true;
            return {...state, data: newArray}
        
        case 'RE_DO_TASK':
            const copyArray = state.data.slice();
            const reDoTask = copyArray.find(a => a.id === action.id);          
            reDoTask.completed = false;
            return{...state, data: copyArray}

        case 'DELETED_TASK':
            const arrayCopied = state.data.slice();
            const deletedTask = arrayCopied.find(a => a.id === action.id);
            deletedTask.deleted = !(deletedTask.deleted);   
            deletedTask.completed = false;         
            return{...state, data: arrayCopied}
        
        default:
            return state;
    }
}