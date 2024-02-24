import { createSlice } from '@reduxjs/toolkit'
export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersData: [],
        currentUser: {}
    },
    reducers: {
        handleOnChange: (state, action) => {
            const { name, value } = action.payload.target
            state.currentUser = {
                ...state.currentUser,
                [name]: value
            }
        },
        handleOnSubmit: (state) => {
            state.usersData = [...state.usersData, state.currentUser];
            console.log("***state", state.currentUser)
            localStorage.setItem("user", binaryEncode(state.usersData))
        }
    },
});
function binaryEncode(data) {
    console.log(data);
    const json = JSON.stringify(data);
    const binaryString = unescape(encodeURIComponent(json));
    return btoa(binaryString);
}

export const { handleOnChange, handleOnSubmit } = usersSlice.actions

export default usersSlice.reducer
