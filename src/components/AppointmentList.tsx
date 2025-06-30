import React from "react";
import type { Appointment } from "../types/appointments-type";

interface AppointmentListProps {
  appointments: Appointment[];
  onMarkCompleted: (id: string) => void;
  onReschedule: (appointment: Appointment) => void;
}

const AppointmentList: React.FC<AppointmentListProps> = ({
  appointments,
  onMarkCompleted,
  onReschedule,
}) => {
  if (appointments.length === 0) {
    return <div className="text-gray">No appointments found.</div>;
  }
  return (
    <div className="divide-y rounded border bg-white shadow">
      {appointments.map((appt) => (
        <div
          key={appt.id}
          className="flex flex-col md:flex-row md:items-center justify-between p-4 gap-2"
        >
          <div>
            <div className="font-semibold">{appt.patientName}</div>
            <div className="text-sm text-gray">
              {appt.date} at {appt.time}
            </div>
            <div className="text-xs text-blue">Status: {appt.status}</div>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            {appt.status !== "completed" && (
              <button
                className="button button-green text-xs"
                onClick={() => onMarkCompleted(appt.id)}
              >
                Mark as Completed
              </button>
            )}
            <button
              className="button button-yellow text-xs"
              onClick={() => onReschedule(appt)}
            >
              Reschedule
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;
