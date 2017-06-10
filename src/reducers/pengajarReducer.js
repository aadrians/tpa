import * as types from '../actions/actionTypes';

export default function pengajarReducer(state = [], action){
  switch (action.type){
    case types.CREATE_PENGAJAR:
      return [...state,
        Object.assign({}, action.pengajar)
      ];

    default:
      return state;
  }
}
