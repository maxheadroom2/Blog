import {
  UPDATE_TASK,
  BUTTON_ALERT
} from './actionTypes';

export const buttonAlert = () => {
  return {
    type: BUTTON_ALERT,
    payload: null
  }
}

export const updateTask = value => {
  return {
    type: UPDATE_TASK,
    payload: value
  }
}
