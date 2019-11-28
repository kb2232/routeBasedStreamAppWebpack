import {combineReducers} from 'redux';

const testReducer = (currstate=[],action)=>{
  switch(action.type){
    case 'TEST_ACTION':
      return action.payload;
    default:
      return currstate;
  }
}

export default combineReducers({
  testReducer,
});