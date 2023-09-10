import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {
// //   signUp,
// //   signIn,
// //   logOut,
// //   getUserData,
// //   addBook,
// //   deleteBook,
// //   updateBook,
// } from './operations';
import { isError, isPending } from "../statusCheckers";
// import {
//   IUserPayload,
//   IAuthState,
//   IBookData,
//   IStore,
//   IGetUserDataPayloadAction,
// } from '../../interfaces';

import {
  IAuthState,
  ILoginUserPayload,
  IRegisterUserPayload,
  IRefreshPayload,
  ICurrentUserPayload,
} from "../../types";
import { signUp, signIn, logOut, refresh, getCurrentUser } from "./operations";

const initialState: IAuthState = {
  user: {
    userName: null,
    email: null,
    avatarURL: null,
  },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  status: "idle",
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // updateBooksAfterPlanningCreation(
    //   state,
    //   action: PayloadAction<IBookData[]>
    // ) {
    //   state.user.goingToRead = state.user.currentlyReading.filter(
    //     item =>
    //       !action.payload.some(planningBook => planningBook._id === item._id)
    //   );
    //   state.user.currentlyReading.push(...action.payload);
    // },
    // updateBooksAfterSuccess(state, action: PayloadAction<IBookData[]>) {
    //   state.user.finishedReading.push(...action.payload);
    //   state.user.currentlyReading = state.user.currentlyReading.filter(
    //     item =>
    //       !action.payload.some(planningBook => planningBook._id === item._id)
    //   );
    // },
    // updateBookToRead(state, action: PayloadAction<IBookData>) {
    //   state.user.finishedReading.push(action.payload);
    //   state.user.currentlyReading = state.user.currentlyReading.filter(
    //     item => item._id !== action.payload._id
    //   );
    // },
    updateTokens(state, action: PayloadAction<any>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      // state.user.finishedReading.push(action.payload);
      // state.user.currentlyReading = state.user.currentlyReading.filter(
      //   item => item._id !== action.payload._id
      // );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      signUp.fulfilled,
      (state, action: PayloadAction<IRegisterUserPayload>) => {
        state.user = action.payload.user;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.status = "fulfilled";
        state.error = null;
      }
    );
    builder.addCase(
      signIn.fulfilled,
      (state, action: PayloadAction<ILoginUserPayload>) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.status = "fulfilled";
        state.error = null;
      }
    );
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = {
        userName: null,
        email: null,
        avatarURL: null,
      };
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.status = "fulfilled";
      state.error = null;
    });
    builder.addCase(
      refresh.fulfilled,
      (state, action: PayloadAction<IRefreshPayload>) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.status = "fulfilled";
        state.error = null;
      }
    );

    builder.addCase(
      getCurrentUser.fulfilled,
      (state, action: PayloadAction<ICurrentUserPayload>) => {
        state.user = {
          userName: action.payload.userName,
          email: action.payload.email,
          avatarURL: action.payload.avatarURL,
        };
        state.isLoggedIn = true;
        state.isLoading = false;
        state.status = "fulfilled";
        state.error = null;
        return;
      }
    );
    // builder.addCase(
    //   addBook.fulfilled,
    //   (state, action: PayloadAction<IBookData>) => {
    //     state.user.goingToRead.push(action.payload);
    //     state.isLoading = false;
    //     state.status = 'fulfilled';
    //     state.error = null;
    //   }
    // );
    // builder.addCase(deleteBook.fulfilled, (state, action) => {
    //   state.user.goingToRead = state.user.goingToRead.filter(
    //     item => item._id !== action.payload
    //   );
    //   state.user.finishedReading = state.user.finishedReading.filter(
    //     item => item._id !== action.payload
    //   );
    //   state.isLoading = false;
    //   state.status = 'fulfilled';
    //   state.error = null;
    // });
    // builder.addCase(updateBook.fulfilled, (state, action) => {
    //   const newBookArray = state.user.finishedReading.map(item => {
    //     if (item._id === action.payload.id) {
    //       const { rating = 0, feedback = '' } = action.payload;
    //       return { ...item, rating, feedback };
    //     }
    //     return item;
    //   });
    //   state.user.finishedReading = newBookArray;
    //   state.isLoading = false;
    //   state.status = 'fulfilled';
    //   state.error = null;
    // });
    builder.addMatcher(isPending, (state) => {
      state.isLoading = true;
      state.status = "pending";
    });
    builder.addMatcher(isError, (state, action) => {
      state.isLoading = false;
      state.status = "rejected";
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const userReducer = authSlice.reducer;
export const {
  //   updateBooksAfterPlanningCreation,
  //   updateBooksAfterSuccess,
  //   updateBookToRead,
  updateTokens,
} = authSlice.actions;

// export const getIsLoggedIn = (state: IStore) => state.auth.isLoggedIn;
// export const getUser = (state: IStore) => state.auth.user;
// export const getAccessToken = (state: IStore) => state.auth.accessToken;
// export const getSid = (state: IStore) => state.auth.sid;
// export const getStatus = (state: IStore) => state.auth.status;

// export const getGoingToRead = (state: IStore) => state.auth.user.goingToRead;
// export const getCurrentlyReading = (state: IStore) =>
//   state.auth.user.currentlyReading;

// export const getFinishedReading = (state: IStore) =>
//   state.auth.user.finishedReading;
