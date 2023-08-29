import {configureStore} from "@reduxjs/toolkit";
import appStateSlice from "./features/appStateSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        appState: appStateSlice
    }
})

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;