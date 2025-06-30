import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Appointment } from "../../types/appointments-type";
import { fetchAppointments } from "../../api/appointments";

interface AppointmentsState {
  items: Appointment[];
  loading: boolean;
  error: string | null;
}

const initialState: AppointmentsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchAppointmentsThunk = createAsyncThunk(
  "appointments/fetch",
  async () => await fetchAppointments()
);

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    markCompleted: (state, action: PayloadAction<string>) => {
      const appt = state.items.find((a) => a.id === action.payload);
      if (appt) appt.status = "completed";
    },
    reschedule: (
      state,
      action: PayloadAction<{ id: string; date: string; time: string }>
    ) => {
      const appt = state.items.find((a) => a.id === action.payload.id);
      if (appt) {
        appt.date = action.payload.date;
        appt.time = action.payload.time;
        appt.status = "rescheduled";
      }
    },
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointmentsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAppointmentsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchAppointmentsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch appointments";
      });
  },
});

export const { markCompleted, reschedule, addAppointment } =
  appointmentsSlice.actions;
export default appointmentsSlice.reducer;
