"use client";
import Link from "next/link";

const bookings = [
  {
    id: 152,
    title: "Beauty & Spa",
    price: 186,
    date: "11th June 2023 09:00 AM",
  },
  {
    id: 151,
    title: "AC Service and Repair",
    price: 121,
    date: "17th June 2023 11:00 AM",
  },
  {
    id: 153,
    title: "Chimney service",
    price: 721,
    date: "17th June 2023 11:00 AM",
  },
];

export default function Page() {
  return (
    <div className=" max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex flex-col lg:flex-row lg:items-center justify-between border rounded-xl p-4 sm:p-5 gap-4 md:gap-6"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-green-500 text-2xl">✔️</div>
              <div>
                <p className="text-sm text-green-700 font-medium mb-1">
                  Order No. #{booking.id}
                </p>
                <h2 className="text-lg font-semibold text-gray-900">
                  {booking.title}
                  <span className="text-red-500 font-medium ml-2">
                    ${booking.price}
                  </span>
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Date of Service : {booking.date}
                </p>
              </div>
            </div>

            <div className="self-start md:self-auto">
              <Link
                href={`/myaccount/mybookings/${booking.id}`}
                className="inline-flex items-center border border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-md text-sm transition"
              >
                👁️ View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
