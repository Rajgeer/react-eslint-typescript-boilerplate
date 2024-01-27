import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";

interface IUser {
  id: string;
  fullname: string;
  email: string;
  token: string;
}

const user: IUser = {
  id: "12345",
  fullname: "Gagan kumar",
  email: "gagankumar123@gmail.com",
  token: "3264724hjsfjjSFS Ff fF kfKFFHHFUYW78R23",
};

export const userSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        id: action.payload.id,
        fullname: action.payload.fullname,
        email: action.payload.email,
        token: action.payload.token,
      };
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
