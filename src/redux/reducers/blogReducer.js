import { BUTTON_ALERT } from '../actions/actionTypes';
import { UPDATE_TASK } from '../actions/actionTypes';

// Estados iniciales en esta seccion

const INITIAL_STATE = {
  posts: {
    title: '',
    content: '',
    likes: 0,
    imgPost: '',
    autor: '',
    date: ''
  },
  submitedPosts: []
}



export default (state = INITIAL_STATE, action) => {
  let {
    posts,
    submitedPosts
  } = state

  let {
    task,
    task1,
    task2,
    list
  } = state;

  switch (action.type) {

    case BUTTON_ALERT:
      console.log("se preiono el boton");
    default:
      return state

    case UPDATE_TASK:
      task = action.payload
      task1 = action.payload
      task2 = action.payload
      return {
        ...state,
        task, task1, task2
      }
  }
}
