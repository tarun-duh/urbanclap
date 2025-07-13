import { useState } from "react";
import Image from "next/image";

export default function AccountSettings() {
  const [form, setForm] = useState({
    displayName: "",
    realName: "",
    email: "example@gmail.com",
    phone: "",
    location: "",
    language: "",
  });
  const [profileImage] = useState("/images/bgImg.jpg");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex w-full min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-1/4 p-8 border-r">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image
              src="/images/bgImg.jpg"
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="text-lg font-semibold">Jose Fuller</h2>
          <p className="text-gray-500 text-sm mb-8">example@gmail.com</p>
        </div>

        <nav className="space-y-4 text-gray-600">
          <div className="bg-blue-100 text-blue-600 rounded-md px-4 py-2">
            Profile
          </div>
          <div className="px-4 py-2">My Bookings</div>
          <div className="px-4 py-2">History</div>
          <div className="px-4 py-2">Notification</div>
          <div className="px-4 py-2">Logout</div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-12">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>

        <h2 className="text-xl font-semibold mb-4">Account details</h2>
        <div className="grid grid-cols-2 gap-6 max-w-3xl">
          <div>
            <label className="block mb-1">Display Name Display</label>
            <input
              type="text"
              name="displayName"
              value={form.displayName}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Enter your display name"
            />
          </div>

          <div>
            <label className="block mb-1">Real Name</label>
            <input
              type="text"
              name="realName"
              value={form.realName}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Enter your real name"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Phone number"
            />
          </div>

          <div>
            <label className="block mb-1">Lives In</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Enter your location"
            />
          </div>

          <div>
            <label className="block mb-1">Language</label>
            <input
              type="text"
              name="language"
              value={form.language}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Enter your language"
            />
          </div>
        </div>

        <button className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50">
          Save Details
        </button>

        <hr className="my-12" />

        <h2 className="text-xl font-semibold mb-4">Password</h2>
        <div className="grid grid-cols-2 gap-6 max-w-3xl">
          <div>
            <label className="block mb-1">New Password</label>
            <input
              type="password"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1">Current Password</label>
            <input
              type="password"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
        </div>

        <button className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50">
          Update Password
        </button>
      </div>
    </div>
  );
}
