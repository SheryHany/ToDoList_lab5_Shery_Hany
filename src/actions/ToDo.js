export const AddToDo = data => ({
    type: 'ADD_TASK',
    data,
})
export const CompletedToDo = completedId => ({
    type: 'COMPLETED_TASK',
    completedId,
})
export const ReDoTask = id => ({
    type: 'RE_DO_TASK',
    id,
})
export const DeletedTask = id => ({
    type: 'DELETED_TASK',
    id,
})

export const a = 1;