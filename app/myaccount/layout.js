"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  const [coverImage, setCoverImage] = useState("/images/cta.jpg");
  const [profileImage] = useState("/images/bgImg.jpg");
  const Logout = () => {
    console.log("you are now logged out");
  };
  const pathname = usePathname();

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Cover Image */}
      <div className="relative h-72 rounded-b-2xl overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={coverImage}
            alt="Cover"
            layout="fill"
            objectFit="cover"
            priority
          />
          <label className="absolute z-10 bottom-4 right-4 backdrop-blur-sm rounded-md px-4 py-1 text-white text-sm cursor-pointer border border-white">
            ✏️ Edit cover
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleCoverChange}
            />
          </label>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-4 p-4 md:p-12 gap-4">
        {/* Sidebar */}
        <aside className="w-full md:h-[500px] md:w-80 border rounded-2xl p-6 mb-4 md:mb-0">
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
              <Image
                src={profileImage}
                alt="Profile"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-xl font-semibold">Jose Fuller</h2>
            <p className="text-gray-500 text-sm mb-6">example@gmail.com</p>
          </div>
          <nav className="flex flex-col gap-2 text-gray-600">
            <Link
              href={"/myaccount"}
              className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${
                pathname === "/myaccount"
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-100"
              }`}
            >
              <span>👤</span> <span>Profile</span>
            </Link>

            <Link
              href={"/myaccount/mybookings"}
              className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${
                pathname === "/myaccount/mybookings"
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-100"
              }`}
            >
              <span>🗂️</span> <span>My Bookings</span>
            </Link>

            <Link
              href={"/myaccount/history"}
              className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${
                pathname === "/myaccount/history"
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-100"
              }`}
            >
              <span>⏳</span> <span>History</span>
            </Link>

            <Link
              href={"/myaccount/notifications"}
              className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${
                pathname === "/myaccount/notifications"
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-100"
              }`}
            >
              <span>🔔</span> <span>Notification</span>
            </Link>

            <button
              onClick={Logout}
              className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100"
            >
              <span>↩️</span> <span>Logout</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
