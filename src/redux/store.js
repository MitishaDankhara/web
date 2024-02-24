import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./reducers/common";
import usersSlice from './reducers/users'
import counterSlice from './reducers/common'

const store = configureStore({
    reducer: {
        counter: usersSlice,
        getapi: counterSlice
    }
})

export default store;