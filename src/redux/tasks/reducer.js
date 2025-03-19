import { FETCH_TASKS_SUCCESS, ADD_TASK_SUCCESS, DELETE_TASK_SUCCESS, TOGGLE_TASK_SUCCESS } from "../tasks/actions";

const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_TASKS_SUCCESS:
            return action.payload;
        case ADD_TASK_SUCCESS:
            return [...state, action.payload];
        case DELETE_TASK_SUCCESS:
            return state.filter(task => task.id !== action.payload);
        case TOGGLE_TASK_SUCCESS:
            return state.map(task => (task.id === action.payload.id ? action.payload : task));
        default:
            return state;
    }
};
export default tasksReducer;