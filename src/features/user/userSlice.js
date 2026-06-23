import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Test'
    },
    reducers: {
        changeName: (state, action) => action.payload || state.user.username,
        changeAvatar: (state, action) => action.payload || state.user.avatar
    }
})

export const {changeName, changeAvatar} = userSlice.actions;
export default userSlice.reducer;