export const ADD_TODO = 'ADD_TODO'

export function AddTodo (text){
    return {
        type: ADD_TODO,
        text
    }
}