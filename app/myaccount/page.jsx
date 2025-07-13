"use client";

import { useState } from "react";

export default function page() {
  const [formData, setFormData] = useState({
    displayName: "",
    realName: "",
    email: "",
    phone: "",
    location: "",
    language: "",
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveDetails = () => {
    console.log("Saving Account Details:", {
      displayName: formData.displayName,
      realName: formData.realName,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      language: formData.language,
    });
    // Later: Call your API here to update profile info
  };

  const handleSavePassword = () => {
    console.log("Saving Password:", {
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword,
    });
    // Later: Call your API here to update password
  };

  const handleDeleteAccount = () => {
    console.log("Deleting Account...");
    // Later: Call your API here to delete account
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-8">Profile</h1>

        <h2 className="text-lg font-semibold mb-4">Account details</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm">Display Name</label>
            <input
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              type="text"
              placeholder="Enter your display name"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Real Name</label>
            <input
              name="realName"
              value={formData.realName}
              onChange={handleChange}
              type="text"
              placeholder="Enter your real name"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="example@gmail.com"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              placeholder="Phone number"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Lives In</label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              type="text"
              placeholder="Enter your location"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Language</label>
            <input
              name="language"
              value={formData.language}
              onChange={handleChange}
              type="text"
              placeholder="Enter your language"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
        </div>

        <button
          onClick={handleSaveDetails}
          className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50"
        >
          Save Details
        </button>
      </section>

      <hr />

      <section>
        <h2 className="text-lg font-semibold mb-4">Password</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm">New Password</label>
            <input
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              type="password"
              placeholder="*********"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Current Password</label>
            <input
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              type="password"
              placeholder="*********"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-2">
          Can’t remember your current password?{" "}
          <a href="#" className="text-blue-500 underline">
            Reset your password.
          </a>
        </p>

        <button
          onClick={handleSavePassword}
          className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50"
        >
          Save Password
        </button>
      </section>

      <hr />

      <section>
        <h2 className="text-lg font-semibold mb-4">Delete Account</h2>
        <p className="text-sm mb-2">Would you like to delete your account?</p>
        <p className="text-sm text-gray-600 mb-6">
          This account contains 12 orders, deleting your account will remove all
          the order details associated with it.
        </p>

        <button
          onClick={handleDeleteAccount}
          className="px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50"
        >
          I want to delete my account
        </button>
      </section>
    </div>
  );
}
