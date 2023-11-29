import { ADD_TODO, COMPLETE_TODO, FILTER_TODO, PENDING_DONE, PENDING_REMOVE, PROCESS_TODO, RECOVERY_TODO, REMOVE_TODO, REMOVE_TRASH } from "./actions";

export function add_todo (toDo){

    return {
        type: ADD_TODO,
        payload: toDo,
        
    }
}

export function remove_todo(id){

    return{
        type: REMOVE_TODO,
        payload: id,
    }
}

export function recovery_todo(id){

    return{
        type: RECOVERY_TODO,
        payload: id,
    }
}

export function process_todo(id){

    return{
        type: PROCESS_TODO,
        payload: id,
    }
}

export function complete_todo(id){

    return{
        type: COMPLETE_TODO,
        payload: id,
    }
}

export function filter_todo(current){

    return{
        type: FILTER_TODO,
        payload: current,
    }
}

export function pending_done(id){

    return{
        type: PENDING_DONE,
        payload: id,
    }
}

export function pending_remove(id){

    return{
        type: PENDING_REMOVE,
        payload: id,
    }
}

export function trash_remove(id){

    return{
        type: REMOVE_TRASH,
        payload: id,
    }
}