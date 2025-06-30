import React from "react";
import type { Appointment } from "../types/appointments-type";

interface TodayTimelineProps {
  appointments: Appointment[];
}

const TodayTimeline: React.FC<TodayTimelineProps> = ({ appointments }) => {
  if (appointments.length === 0) return null;
  // Sort by time
  const sorted = [...appointments].sort((a, b) => a.time.localeCompare(b.time));
  return (
    <div className="my-6">
      <h2 className="text-lg font-semibold mb-2">Today's Appointments</h2>
      <div className="border-l-2 border-blue-400 pl-4">
        {sorted.map((appt) => (
          <div key={appt.id} className="mb-4 relative">
            <div className="absolute -left-5 top-1 w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="font-medium">
              {appt.time} - {appt.patientName}
            </div>
            <div className="text-xs text-gray">Status: {appt.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayTimeline;
