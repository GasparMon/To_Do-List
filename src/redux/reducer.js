import {
  ADD_TODO,
  COMPLETE_TODO,
  PENDING_DONE,
  PENDING_REMOVE,
  PROCESS_TODO,
  RECOVERY_TODO,
  REMOVE_TODO,
  REMOVE_TRASH,
} from "./actions";

const initialState = {
  toDos: [],
  complete_todos: [],
  process_todos: [],
  trash_todos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
      };

    case REMOVE_TODO:
      const [deletedTodo] = state.toDos.filter(
        (task) => task.id === action.payload
      );
      const filter_todos = state.toDos.filter(
        (task) => task.id !== action.payload
      );

      return {
        ...state,
        toDos: filter_todos,
        trash_todos: [...state.trash_todos, deletedTodo],
      };

    case PROCESS_TODO:
      const filtered_todos = state.toDos.filter(
        (task) => task.id !== action.payload
      );
      const [pending_todo] = state.toDos.filter(
        (task) => task.id === action.payload
      );

      const pending_todos = pending_todo ? [pending_todo] : [];

      return {
        ...state,
        toDos: filtered_todos,
        process_todos: [...state.process_todos, ...pending_todos],
      };

      case PENDING_REMOVE:
      const [deletedPending] = state.process_todos.filter(
        (task) => task.id === action.payload
      );
      const filter_Pending = state.process_todos.filter(
        (task) => task.id !== action.payload
      );

      return {
        ...state,
        process_todos: filter_Pending,
        trash_todos: [...state.trash_todos, deletedPending],
      };

      case PENDING_DONE:
      const filteredes_process = state.process_todos.filter(
        (task) => task.id !== action.payload
      );
      const done_process = state.process_todos.find((task) => task.id === action.payload);
      return {
        ...state,
        process_todos: filteredes_process,
        complete_todos: [...state.complete_todos, done_process],
      };

      
    case COMPLETE_TODO:
      const filteredes_todos = state.toDos.filter(
        (task) => task.id !== action.payload
      );
      const done_todo = state.toDos.find((task) => task.id === action.payload);
      return {
        ...state,
        toDos: filteredes_todos,
        complete_todos: [...state.complete_todos, done_todo],
      };

    case RECOVERY_TODO:
      const [updatedTodo] = state.trash_todos.filter(
        (task) => task.id === action.payload
      );
      const trash_filter_todos = state.trash_todos.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        toDos: [...state.toDos, updatedTodo],
        trash_todos: trash_filter_todos,
      };

      case REMOVE_TRASH:

      const filter_trash = state.trash_todos.filter(
        (task) => task.id !== action.payload
      );

      return {
        ...state,
        trash_todos: filter_trash,
      };

    default:
      return {
        ...state,
      };
  }
}
