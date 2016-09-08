import { POST } from '../constants/ActionTypes';

export function load() {
  return {
    type: POST.LOAD,
  };
}

export function add() {
  return {
    type: POST.ADD,
  };
}
