import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUpApi } from "@/api";
import { signUpRequest, signUpSuccess, signUpFailure } from "./signUpSlice";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signUpUser = createAsyncThunk(
  "signup",
  async (userData: UserData, thunkAPI) => {
    try {
      thunkAPI.dispatch(signUpRequest());
      const response = await signUpApi(userData);
      thunkAPI.dispatch(signUpSuccess());
      return response.data;
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred.";
      thunkAPI.dispatch(signUpFailure(errorMessage));
      throw error;
    }
  }
);
