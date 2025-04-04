import {createSlice} from "@reduxjs/toolkit";


const statusServerSlice = createSlice({
    name: 'statusServer',
    initialState: {
        status: true,
    },
    reducers: {
        setStatusServer(state, action) {
            state.status = action.payload;
        },
    }
});

export const {setStatusServer} = statusServerSlice.actions;
export default statusServerSlice.reducer;