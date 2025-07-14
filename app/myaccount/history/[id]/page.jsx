import { notFound } from "next/navigation";

const historyBookings = {
  151: {
    title: "AC Service and Repair",
    price: 121,
    status: "Customer Cancelled",
    reason: "Customer canceled due to time conflict.",
  },
  152: {
    title: "Beauty & Spa",
    price: 186,
    status: "Customer Cancelled",
    reason: "Customer changed their plans.",
  },
  153: {
    title: "Chimney service",
    price: 721,
    status: "Customer Cancelled",
    reason: "Service no longer needed.",
  },
};

export default function page({ params }) {
  const booking = historyBookings[params.id];

  if (!booking) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cancelled Booking Details</h1>
      <div className="border p-5 rounded-xl space-y-2">
        <h2 className="text-xl font-semibold text-red-600">{booking.title}</h2>
        <p className="text-gray-700">Price: ${booking.price}</p>
        <p className="text-red-500">Status: {booking.status}</p>
        <p className="text-gray-600 mt-2">Reason: {booking.reason}</p>
      </div>
    </div>
  );
}
