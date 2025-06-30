import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../features/appointments/store";
import {
  fetchAppointmentsThunk,
  markCompleted,
  reschedule,
} from "../features/appointments/appointmentsSlice";
import Filters from "../components/Filters";
import StatusCounts from "../components/StatusCounts";
import AppointmentList from "../components/AppointmentList";
import RescheduleModal from "../components/RescheduleModal";
import TodayTimeline from "../components/TodayTimeline";
import type { Appointment } from "../types/appointments-type";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.appointments
  );

  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAppt, setSelectedAppt] = useState<Appointment | null>(null);

  useEffect(() => {
    dispatch(fetchAppointmentsThunk());
  }, [dispatch]);

  const filtered = items.filter((appt) => {
    const statusMatch = status ? appt.status === status : true;
    const startMatch = startDate ? appt.date >= startDate : true;
    const endMatch = endDate ? appt.date <= endDate : true;
    return statusMatch && startMatch && endMatch;
  });

  const today = new Date().toISOString().slice(0, 10);
  const todaysAppointments = filtered.filter((appt) => appt.date === today);

  const handleMarkCompleted = (id: string) => {
    dispatch(markCompleted(id));
  };
  const handleReschedule = (appt: Appointment) => {
    setSelectedAppt(appt);
    setModalOpen(true);
  };
  const handleModalSubmit = (id: string, date: string, time: string) => {
    dispatch(reschedule({ id, date, time }));
    setModalOpen(false);
    setSelectedAppt(null);
  };

  return (
    <div className="app-container">
      <h1>Doctor Dashboard</h1>
      <Filters
        status={status}
        onStatusChange={setStatus}
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
      <StatusCounts appointments={filtered} />
      <div className="mt-8">
        {loading && <div>Loading appointments...</div>}
        {error && <div className="text-red">{error}</div>}
        <AppointmentList
          appointments={filtered}
          onMarkCompleted={handleMarkCompleted}
          onReschedule={handleReschedule}
        />
      </div>
      <TodayTimeline appointments={todaysAppointments} />
      <RescheduleModal
        appointment={selectedAppt}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default Dashboard;
