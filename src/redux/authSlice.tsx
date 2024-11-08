import {AsyncThunk, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import User from "../types/User";
import { Status } from "../commons/constants";
import httpClient from "../commons/httpClient";
import UserLogin from "../types/UserLogin";
import { GET_USER_INFO_URL, LOGIN_URL, REGISTER_URL } from "../commons/apiUrl";
import UserRegister from "../types/UserRegister";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {} as User | null,
        status: Status.Idle
    },
    reducers: {},
    /**
     * Extra reducers for the auth slice.
     * The extra reducers are used to handle the side effects of the async thunks.
     * The side effects are:
     * - Fetching the user from the server.
     * - Handling the login process.
     */
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                /**
                 * Set the status to loading when the fetchUser thunk is pending.
                 */
                state.status = Status.Loading;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                /**
                 * Set the status to succeeded and the user to the received user when the fetchUser thunk is fulfilled.
                 */
                state.status = Status.Succeeded;
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state) => {
                /**
                 * Set the status to failed when the fetchUser thunk is rejected.
                 */
                state.status = Status.Failed;
            }).addCase(loginUser.pending, (state) => {
                /**
                 * Set the status to loading when the handleLogin thunk is pending.
                 */
                state.status = Status.Loading;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                /**
                 * Set the status to succeeded and the user to the received user when the handleLogin thunk is fulfilled.
                 */
                state.status = Status.Succeeded;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state) => {
                /**
                 * Set the status to failed when the handleLogin thunk is rejected.
                 */
                state.status = Status.Failed;
            })
            .addCase(registerUser.pending, (state) => {
                state.status = Status.Loading;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = Status.Succeeded;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state) => {
                state.status = Status.Failed;
            });
    },

});

export const fetchUser: AsyncThunk<User, void, {}> = createAsyncThunk("auth/fetchUser", async () => {
    const response = await httpClient.get(GET_USER_INFO_URL);
    return response.data;
});

export const loginUser: AsyncThunk<User, UserLogin, {}> = createAsyncThunk("auth/handleLogin", async (user: UserLogin) => {
    const response = await httpClient.post(LOGIN_URL, user);
    return response.data;
});

export const registerUser: AsyncThunk<User, UserRegister, {}> = createAsyncThunk("auth/handleRegister", async (user: UserRegister) => {
    const response = await httpClient.post(REGISTER_URL, user);
    return response.data;
})

export default authSlice;