"use client";
import { useState } from "react";

export default function page() {
  const [emailSettings, setEmailSettings] = useState({
    weekly: false,
    summary: true,
  });

  const [orderUpdates, setOrderUpdates] = useState({
    sms: false,
    call: true,
  });

  const [siteNotifications, setSiteNotifications] = useState({
    newFollower: true,
    postLike: false,
    followedPost: false,
    postCollection: false,
    delivery: false,
  });

  const handleEmailToggle = (key) => {
    setEmailSettings({ ...emailSettings, [key]: !emailSettings[key] });
  };

  const handleOrderToggle = (key) => {
    setOrderUpdates({ ...orderUpdates, [key]: !orderUpdates[key] });
  };

  const handleWebsiteToggle = (key) => {
    setSiteNotifications({
      ...siteNotifications,
      [key]: !siteNotifications[key],
    });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Notification settings</h1>

      {/* Email Notifications */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Email Notifications</h2>
        <div className="border-t pt-4 space-y-4">
          <ToggleRow
            title="Weekly Notification"
            description="Various versions have evolved over the years, sometimes by accident, sometimes on purpose."
            value={emailSettings.weekly}
            onChange={() => handleEmailToggle("weekly")}
          />
          <ToggleRow
            title="Account Summary"
            description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas eu sollicitudin massa."
            value={emailSettings.summary}
            onChange={() => handleEmailToggle("summary")}
          />
        </div>
      </section>

      {/* Order Updates */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Order updates</h2>
        <div className="border-t pt-4 space-y-4">
          <ToggleRow
            title="Text messages"
            description="You are going to use a passage of Lorem Ipsum, you need to be sure."
            value={orderUpdates.sms}
            onChange={() => handleOrderToggle("sms")}
          />
          <ToggleRow
            title="Call before checkout"
            description="We'll only call if there are pending changes."
            value={orderUpdates.call}
            onChange={() => handleOrderToggle("call")}
          />
        </div>
      </section>

      {/* Website Notifications */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Website Notification</h2>
        <div className="border-t pt-4 space-y-2">
          {Object.entries(siteNotifications).map(([key, val]) => (
            <CheckboxRow
              key={key}
              label={labelMap[key]}
              checked={val}
              onChange={() => handleWebsiteToggle(key)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

// Toggle Row Component
function ToggleRow({ title, description, value, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <label className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={value}
          onChange={onChange}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 transition"></div>
        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition peer-checked:translate-x-5"></div>
      </label>
    </div>
  );
}

// Checkbox Row Component
function CheckboxRow({ label, checked, onChange }) {
  return (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className="text-gray-800">{label}</span>
    </label>
  );
}

// Map key to readable label
const labelMap = {
  newFollower: "New Follower",
  postLike: "Post Like",
  followedPost: "Someone you followed posted",
  postCollection: "Post added to collection",
  delivery: "Order Delivery",
};
