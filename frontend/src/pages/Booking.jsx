import React from "react";
import BookingForm from "../components/BookingForm";

function Booking() {
  return (
    <div className="booking">
      <h2 className="mb-4 text-center">Confidential Booking</h2>
      <p className="text-muted text-center mb-4">
        Book a private session with a counselor. Your details remain confidential.
      </p>

      <div className="card p-4 shadow-sm">
        <BookingForm />
      </div>
    </div>
  );
}

export default Booking;
