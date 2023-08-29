import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type appState = {
    appState: string
}

const initialState: appState = {
    appState: ""
}

const appStateSlice = createSlice({
    name: "appState",
    initialState,
    reducers: {
        setAppState: (state: appState, action: PayloadAction<string>) => {
            state.appState = action.payload;
        }
    }
});

export const {setAppState} = appStateSlice.actions;
export default appStateSlice.reducer;