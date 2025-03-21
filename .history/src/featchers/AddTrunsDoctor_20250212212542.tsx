import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { WorkingHoursType } from "../servises/getDoctors";

export interface TypeNobatDoctors {
  from: string;
  to: string;
  name: string;
  specialty: string;
  image: string;
  nobatDay: string;
  id: string;
  isDayNobat: boolean;
  phone: string;
  workingOurs:WorkingHoursType[]
}
const initialState: { NobatDoctors: TypeNobatDoctors[] } = {
  NobatDoctors: [],
};

export const NobatDoctorsReducer = createSlice({
  name: "NobatDoctors",
  initialState,
  reducers: {
    addNobatDaayDoctors: (state, action: PayloadAction<TypeNobatDoctors>) => {
      const doctor = action.payload;
      const exitDoctor = state.NobatDoctors.some(
        (res) => res.id === doctor.id
      );

      if (!exitDoctor) {
        state.NobatDoctors.push(doctor);
      } else {
        toast.error("سقف نوبت دهی شما پر شده");
      }
    },
    delefNobatDoctors: (state, action: PayloadAction<string>) => {
      state.NobatDoctors = state.NobatDoctors.filter(
        (res) => res.id !== action.payload
      );
    },
  },
});

export const { addNobatDaayDoctors, delefNobatDoctors } =
  NobatDoctorsReducer.actions;
export default NobatDoctorsReducer.reducer;
