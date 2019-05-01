import {
  BUTTON_ALERT
} from '../actions/actionTypes';


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
  let {posts, submitedPosts} = state

  switch (action.type) {

    case BUTTON_ALERT:
      console.log("se preiono el boton");
      default: return state 
  }
}
