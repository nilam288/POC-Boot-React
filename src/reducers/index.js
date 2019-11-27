import {combineReducers} from 'redux';
import errorReducer from './ErrorReducer';
import projectReduce from './ProjectReducer';

export default combineReducers({
    error:errorReducer,
    projects:projectReduce
});