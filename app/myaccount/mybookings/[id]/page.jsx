import { notFound } from "next/navigation";

const bookings = {
  151: {
    title: "AC Service and Repair",
    price: 121,
    date: "17th June 2023 11:00 AM",
    details: "Technician will repair AC unit and do full cleaning.",
  },
  152: {
    title: "Beauty & Spa",
    price: 186,
    date: "11th June 2023 09:00 AM",
    details: "Includes massage, facial, and manicure.",
  },
  153: {
    title: "Chimney service",
    price: 721,
    date: "17th June 2023 11:00 AM",
    details: "Full chimney cleaning and safety check.",
  },
};

export default function page({ params }) {
  const booking = bookings[params.id];

  if (!booking) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
      <div className="border p-5 rounded-xl space-y-2">
        <h2 className="text-xl font-semibold">{booking.title}</h2>
        <p className="text-gray-700">Price: ${booking.price}</p>
        <p className="text-gray-700">Date: {booking.date}</p>
        <p className="text-gray-600 mt-2">{booking.details}</p>
      </div>
    </div>
  );
}
