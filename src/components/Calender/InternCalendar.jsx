import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const InternCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("./InternCalendar.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="w-11/12 max-w-4xl h-[600px] ml-[18%] p-5 bg-white rounded-xl shadow-lg border-4 border-black overflow-hidden">
      <h2 className="text-center text-2xl font-bold text-red-700 mb-4 uppercase tracking-wide">
        Intern Calendar 📅
      </h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={(info) => alert(`Event: ${info.event.title}`)}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        height="auto"
        className="overflow-y-auto max-h-[500px]"
      />
    </div>
  );
};

export default InternCalendar;
