export type AppointmentStatus =
  | "confirmed"
  | "pending"
  | "completed"
  | "rescheduled";

export interface Appointment {
  id: string;
  patientName: string;
  time: string; // ISO string
  date: string; // ISO string (YYYY-MM-DD)
  status: AppointmentStatus;
} 