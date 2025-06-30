import type { Appointment } from "../types/appointments-type";

export const fetchAppointments = async (): Promise<Appointment[]> => {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 800));
  return [
    {
      id: "1",
      patientName: "John Doe",
      time: "09:00",
      date: "2024-07-01",
      status: "confirmed",
    },
    {
      id: "2",
      patientName: "Jane Smith",
      time: "10:30",
      date: "2024-07-01",
      status: "pending",
    },
    {
      id: "3",
      patientName: "Alice Brown",
      time: "11:00",
      date: "2024-07-02",
      status: "confirmed",
    },
    {
      id: "4",
      patientName: "Bob Lee",
      time: "13:00",
      date: "2024-07-02",
      status: "completed",
    },
  ];
};
