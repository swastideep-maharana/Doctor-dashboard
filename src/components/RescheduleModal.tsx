import React, { useState } from "react";
import type { Appointment } from "../types/appointments-type";

interface RescheduleModalProps {
  appointment: Appointment | null;
  open: boolean;
  onClose: () => void;
  onSubmit: (id: string, date: string, time: string) => void;
}

const RescheduleModal: React.FC<RescheduleModalProps> = ({
  appointment,
  open,
  onClose,
  onSubmit,
}) => {
  const [date, setDate] = useState(appointment?.date || "");
  const [time, setTime] = useState(appointment?.time || "");

  React.useEffect(() => {
    setDate(appointment?.date || "");
    setTime(appointment?.time || "");
  }, [appointment]);

  if (!open || !appointment) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-lg font-bold mb-4">Reschedule Appointment</h2>
        <div className="mb-2">
          <label className="block text-sm">Date</label>
          <input
            type="date"
            className="border rounded px-2 py-1 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Time</label>
          <input
            type="time"
            className="border rounded px-2 py-1 w-full"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-2">
          <button className="button button-gray" onClick={onClose}>
            Cancel
          </button>
          <button
            className="button button-blue"
            onClick={() => {
              if (date && time) onSubmit(appointment.id, date, time);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default RescheduleModal;
