export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const TOGGLE_TASK_SUCCESS = "TOGGLE_TASK_SUCCESS";

export const fetchTasksSuccess = (tasks) => ({ type: FETCH_TASKS_SUCCESS, payload: tasks });
export const addTaskSuccess = (task) => ({ type: ADD_TASK_SUCCESS, payload: task });
export const deleteTaskSuccess = (taskId) => ({ type: DELETE_TASK_SUCCESS, payload: taskId });
export const toggleTaskSuccess = (task) => ({ type: TOGGLE_TASK_SUCCESS, payload: task });

export const fetchTasks = () => async (dispatch) => {
    const response = await fetch("https://67cb45c33395520e6af4de18.mockapi.io/name");
    const data = await response.json();
    dispatch(fetchTasksSuccess(data));
};

export const addTask = (text) => async (dispatch) => {
    const response = await fetch("https://67cb45c33395520e6af4de18.mockapi.io/name", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, completed: false }),
    });
    const data = await response.json();
    dispatch(addTaskSuccess(data));
};

export const deleteTask = (taskId) => async (dispatch) => {
    await fetch(`https://67cb45c33395520e6af4de18.mockapi.io/name/${taskId}`, { method: "DELETE" });
    dispatch(deleteTaskSuccess(taskId));
};

export const toggleTask = (task) => async (dispatch) => {
    const response = await fetch(`https://67cb45c33395520e6af4de18.mockapi.io/name/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...task, completed: !task.completed }),
    });
    const data = await response.json();
    dispatch(toggleTaskSuccess(data));
};