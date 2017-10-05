import {
  NEW_RESUME
}
from './actions';
import Resume from './resume-data-andy';

const initialState = {}

function newResume(state) {
  return {
    ...state,
    ...Resume
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_RESUME:
      return newResume(state, action)
    default:
      return state;
  }
}