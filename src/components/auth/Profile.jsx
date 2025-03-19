import React, { useState, useEffect } from 'react';

function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: '',
    twoFactorAuth: false,
  });

  useEffect(() => {
    const currentProfile = {
      name: 'suman raj',
      email: 'suman.raj@example.com',
      profilePicture: 'https://via.placeholder.com/150',
      twoFactorAuth: true,
    };
    setProfile((prevProfile) => ({
      ...prevProfile,
      ...currentProfile,
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setProfile((prevProfile) => ({
      ...prevProfile,
      profilePicture: fileUrl,
    }));
  };

  const handleToggle2FA = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      twoFactorAuth: !prevProfile.twoFactorAuth,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profile.password !== profile.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const updatedProfile = {
      name: profile.name,
      email: profile.email,
      password: profile.password,
      profilePicture: profile.profilePicture,
      twoFactorAuth: profile.twoFactorAuth,
    };
    console.log('Updating profile with:', updatedProfile);
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Profile Settings</h1>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4 text-center">
          <img
            src={profile.profilePicture}
            alt="Profile"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            value={profile.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={profile.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twoFactorAuth">
            Two-Factor Authentication
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="twoFactorAuth"
              name="twoFactorAuth"
              checked={profile.twoFactorAuth}
              onChange={handleToggle2FA}
              className="mr-2"
            />
            <span>{profile.twoFactorAuth ? 'Enabled' : 'Disabled'}</span>
          </div>
        </div>
        <button className="w-full px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;