import types from '../actionTypes';

export default function (state = [], action) {console.log(action, state);
  switch(action.type){
    case types.REFRESH_TOPICS:
      return action.topics;
    default: return state;
  }
}