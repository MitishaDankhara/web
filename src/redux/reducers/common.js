import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getApi = createAsyncThunk(
    'counter/getApi', async () => {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/todos')
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            return res.json();
        }
        catch (error) {
            console.log(error)
        }
    }
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        text: "hello world!",
        num: 9,
        loading: false,
        data: null,
        error: null
    },
    reducers: {
        handelText: (state, action) => {
            state.text = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getApi.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getApi.fulfilled, (state, action) => {
            console.log("****action", action.payload)
            state.loading = false
            // state.data = action.payload
        })
        builder.addCase(getApi.rejected, (state, action) => {
            console.log("****action", action.payload)
            state.loading = false
            if (action.error.name === 'Error' && action.error.message === 'Failed to fetch data') {
                console.log('Error 404: Not Found');
            }
            state.error = action.error.message; // Set error message

        })
    }

})

export const { handelText } = counterSlice.actions

export default counterSlice.reducer
