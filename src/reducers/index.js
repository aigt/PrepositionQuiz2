import { combineReducers } from 'redux';
import progress from './progress';
import question from './question';
import quiz from './quiz';
import quizSetup from './quizSetup';
import result from './result';
import { routerReducer } from 'react-router-redux';


export default combineReducers({
  progress,
  question,
  quiz,
  quizSetup,
  result,
  routing: routerReducer
})