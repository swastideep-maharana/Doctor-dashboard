# Doctor Dashboard
_Doctor Dashboard – clean, simple, and easy to use._

Welcome! This is a modern, responsive dashboard for doctors to manage their appointments. You can filter, update, and reschedule appointments with just a few clicks. The interface is designed to be intuitive and fast, whether you're on desktop or mobile.

## Features

- View all doctor appointments with patient name, date, time, and status
- Filter appointments by status and custom date range
- See counts of appointments per status
- Mark appointments as completed
- Reschedule appointments (with modal)
- Timeline view for today's appointments
- Responsive and clean design for desktop and mobile
- State management with Redux Toolkit
- Mock API/data fetching

## Tech Stack

- React 18 + TypeScript
- Vite
- Redux Toolkit
- CSS Modules (custom modern CSS)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## Project Structure

```
src/
  components/         # Reusable UI components
  features/           # Redux slices and store
  pages/              # Main dashboard page
  types/              # TypeScript types
  api/                # Mock API/data fetching
  App.tsx             # App entry
  index.css           # Main global styles
```

## Customization

- To change appointment data, edit the mock API in `src/api/appointments.ts`.
- To adjust styles, edit `src/index.css`.
"# Doctor-dashboard" 
