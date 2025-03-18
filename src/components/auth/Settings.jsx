import React, { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@headlessui/react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "Suman raj",
    email: "suman.raj@example.com",
    username: "sumanraj",
    bio: "Arbitrage Trader at ChainArb",
    profilePicture: "https://via.placeholder.com/150",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: true,
    recentActivities: [
      { date: "2025-02-20", activity: "Logged in from a new device" },
      { date: "2025-02-18", activity: "Changed password" },
    ],
  });

  const handleInputChange = (e, stateUpdater) => {
    const { name, value } = e.target;
    stateUpdater((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10"> Settings</h2>

        {/* Profile Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg mb-10">
          <h3 className="text-2xl font-semibold mb-6">Profile Settings</h3>
          <div className="flex items-center space-x-6">
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-blue-400"
            />
            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={handleProfilePictureChange}
              />
              <span className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-semibold shadow-md">
                Change Photo
              </span>
            </label>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={(e) => handleInputChange(e, setProfile)}
              placeholder="Full Name"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={(e) => handleInputChange(e, setProfile)}
              placeholder="Email"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={(e) => handleInputChange(e, setProfile)}
              placeholder="Username"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="bio"
              value={profile.bio}
              onChange={(e) => handleInputChange(e, setProfile)}
              placeholder="Bio"
              className="col-span-2 w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg mb-10">
          <h3 className="text-2xl font-semibold mb-6"> Notification Settings</h3>
          <div className="space-y-4">
            {Object.keys(notifications).map((key) => (
              <div key={key} className="flex justify-between items-center">
                <span className="capitalize">{key} Notifications</span>
                <Switch
                  checked={notifications[key]}
                  onChange={() =>
                    setNotifications((prev) => ({
                      ...prev,
                      [key]: !prev[key],
                    }))
                  }
                  className={`${
                    notifications[key] ? "bg-blue-500" : "bg-gray-700"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span
                    className={`${
                      notifications[key] ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform bg-white rounded-full`}
                  />
                </Switch>
              </div>
            ))}
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6"> Security Settings</h3>
          <div className="flex justify-between items-center mb-6">
            <span>Two-Factor Authentication</span>
            <Switch
              checked={security.twoFactorAuth}
              onChange={() =>
                setSecurity((prev) => ({
                  ...prev,
                  twoFactorAuth: !prev.twoFactorAuth,
                }))
              }
              className={`${
                security.twoFactorAuth ? "bg-green-500" : "bg-gray-700"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  security.twoFactorAuth ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full`}
              />
            </Switch>
          </div>

          <h4 className="text-xl font-semibold mb-4"> Recent Activities</h4>
          <ul className="space-y-2 text-gray-300">
            {security.recentActivities.map((activity, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-800 p-3 rounded-lg"
              >
                <span className="text-blue-400">{activity.date}</span> - {activity.activity}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
