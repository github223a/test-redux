export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK   = 'EDIT_TASK';
export const ADD_TASK    = 'ADD_TASK';

export const removeTask = id => ({ type: REMOVE_TASK, id });
export const editTask   = (value, id) => ({ type: EDIT_TASK, id, value });
export const addTask    = task => ({ type: ADD_TASK, task });

// export default (type, data) => {
//     return { type, data };
// }

// const connect = (props) => (component) => <component {...props}/>
