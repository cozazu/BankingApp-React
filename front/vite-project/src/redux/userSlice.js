import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : {},
    userAppointments: []
}

export const userSlice = createSlice({
    name: "actualUser",
    initialState,
    reducers: {
        setUserData: (actualUser, action) => {
            actualUser.userData = action.payload;
        },
        setUserAppointments: (actualUser, action) => {
            actualUser.userAppointments = action.payload;
        }
    }
});

export const { setUserData, setUserAppointments } = userSlice.actions;
export default userSlice.reducer;