'use client';

import { useState } from 'react';

interface SigninProps {
  username: string;
  setUsername: (username: string) => void;
  handleSignin: () => void;
}

const Signin = ({ username, setUsername, handleSignin }: SigninProps) => {

  return (
    <div>
        <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" />
      <button onClick={handleSignin} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed">Signin</button>
    </div>
  );
};

export default Signin;