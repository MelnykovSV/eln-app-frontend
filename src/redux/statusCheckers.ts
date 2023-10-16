import { AnyAction } from "@reduxjs/toolkit";

export function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

export function isPending(action: AnyAction) {
  return action.type.endsWith("pending");
}

export function isAuthError(action: AnyAction) {
  return (
    action.type.endsWith("rejected") && action.type.split("/")[0] === "auth"
  );
}

export function isAuthPending(action: AnyAction) {
  return (
    action.type.endsWith("pending") && action.type.split("/")[0] === "auth"
  );
}

export function isSchemesError(action: AnyAction) {
  return (
    action.type.endsWith("rejected") && action.type.split("/")[0] === "schemes"
  );
}

export function isSchemesPending(action: AnyAction) {
  return (
    action.type.endsWith("pending") && action.type.split("/")[0] === "schemes"
  );
}
