// store/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { fetchUser } from '@/store/actions/userActions';

const userReducers = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default userReducers.reducer
