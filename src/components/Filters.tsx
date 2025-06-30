import React from "react";
import type { AppointmentStatus } from "../types/appointments-type";

interface FiltersProps {
  status: string;
  onStatusChange: (status: string) => void;
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

const statusOptions: AppointmentStatus[] = [
  "confirmed",
  "pending",
  "completed",
  "rescheduled",
];

const Filters: React.FC<FiltersProps> = ({
  status,
  onStatusChange,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => (
  <div className="flex flex-col flex-row gap-4 mb-4">
    <select
      className="border rounded px-2 py-1"
      value={status}
      onChange={(e) => onStatusChange(e.target.value)}
    >
      <option value="">All Statuses</option>
      {statusOptions.map((opt) => (
        <option key={opt} value={opt}>
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </option>
      ))}
    </select>
    <div className="flex gap-2 items-center">
      <label>From:</label>
      <input
        type="date"
        className="border rounded px-2 py-1"
        value={startDate}
        onChange={(e) => onStartDateChange(e.target.value)}
      />
      <label>To:</label>
      <input
        type="date"
        className="border rounded px-2 py-1"
        value={endDate}
        onChange={(e) => onEndDateChange(e.target.value)}
      />
    </div>
  </div>
);

export default Filters;
