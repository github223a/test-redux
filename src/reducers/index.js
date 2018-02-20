import { combineReducers } from 'redux';
import * as actions from '../actions';

const defaultTasks = [
    { id: 1, name: 'task1', status: 'Not started yet' },
    { id: 2, name: 'task2', status: 'process' },
    { id: 3, name: 'task3', status: 'finished' },
    { id: 4, name: 'task4', status: 'Not started yet' },
    { id: 5, name: 'task5', status: 'process' },
    { id: 6, name: 'task6', status: 'finished' }
];

const tasks = (state = defaultTasks, action) => {
    switch (action.type) {
        case actions.REMOVE_TASK:
            const filtered = state.filter(task => task.id !== action.id);
            return [ ...filtered ];

        case actions.EDIT_TASK:
            const tasks = state.map(item => {
                if (item.id === action.id) {
                    item.name = action.value;
                }
                return item;
            });

            return [ ...tasks ];

        case actions.ADD_TASK:
            const { id, name, status } = action.task;
            state.push({ id, name, status });
            return [ ...state ];

        default:
            return state;
    }
};

export default combineReducers({ tasks });

