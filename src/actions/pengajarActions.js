import * as types from './actionTypes';

export function createPengajar(pengajar) {
  return { type: types.CREATE_PENGAJAR, pengajar };
}
