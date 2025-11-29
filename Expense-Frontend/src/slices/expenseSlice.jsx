import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/axios";

export const fetchUserExpenses = createAsyncThunk(
  "expense/fetchUserExpenses",
  async (undefined, { rejectWithValue }) => {
    try {
      const response = await axios.get("/user/account/expense", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const addExpense = createAsyncThunk(
  "expense/addExpense",
  async ({ formData, resetForm }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/user/account/expense", formData, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      resetForm();      
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    data: [],
    errors: null,
    loading: false,
  },
  reducers: {
    resetExpense: (state) => {
      (state.data = []), (state.errors = null), (state.loading = false);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserExpenses.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.errors = null;
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.errors = action.payload;
      });
  },
});
export default expenseSlice.reducer;
export const { resetExpense } = expenseSlice.actions;
