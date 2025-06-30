import React from "react";
import type { Appointment } from "../types/appointments-type";

interface StatusCountsProps {
  appointments: Appointment[];
}

const statusLabels: Record<string, string> = {
  confirmed: "Confirmed",
  pending: "Pending",
  completed: "Completed",
  rescheduled: "Rescheduled",
};

const StatusCounts: React.FC<StatusCountsProps> = ({ appointments }) => {
  const counts = appointments.reduce<Record<string, number>>((acc, appt) => {
    acc[appt.status] = (acc[appt.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="flex gap-4 mb-4">
      {Object.entries(statusLabels).map(([status, label]) => (
        <div key={status} className="bg-gray-100 rounded px-3 py-1 text-sm">
          {label}: {counts[status] || 0}
        </div>
      ))}
    </div>
  );
};

export default StatusCounts;
