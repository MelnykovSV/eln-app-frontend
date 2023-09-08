import { AnyAction } from '@reduxjs/toolkit';

export function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export function isPending(action: AnyAction) {
  return action.type.endsWith('pending');
}
