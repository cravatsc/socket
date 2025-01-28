'use client';

import { useEffect, useState } from 'react';
import { initSocket, getSocket } from '@/lib/socket';
import Signin from './components/signin';

const Home = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignin = () => {
    if (username.trim() === '') {
      alert('Please enter a username');
      return;
    }
    console.log('Signing in with username:', username);
    setUsername(username);
    setIsSignedIn(true);
  }

  useEffect(() => {
    const socket = initSocket();

    socket.on('connect', () => {
      console.log('socket connected');
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      console.log('socket disconnected');
      setIsConnected(false);
    });

    socket.on('message', (data: string) => {
      setMessages(prev => [...prev, data]);
      console.log('Received message:', data);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('message');
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    try {
      const socket = getSocket();
      socket.emit('sendMessage', inputMessage);
      setInputMessage(''); // Clear input after sending
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <div className="space-y-4">
        {/* Connection Status */}
        <div className="flex items-center space-x-2">
          <div 
            className={`w-3 h-3 rounded-full ${
              isConnected ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
          <span>{isConnected ? 'Connected' : 'Disconnected'}</span>
        </div>

        {!isSignedIn && <Signin username={username} setUsername={setUsername} handleSignin={handleSignin} />}

        {isSignedIn && 
        <div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
            <button
              onClick={sendMessage}
              disabled={!isConnected || !inputMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>

          <div className="border rounded-md p-4 min-h-[200px] space-y-2">
            <h2 className="font-semibold mb-2">Messages:</h2>
            {messages.length === 0 ? (
              <p className="text-gray-500">No messages yet</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="p-2 bg-gray-100 rounded-md text-gray-700">
                  {msg}
                </div>
              ))
            )}
          </div>
        </div>
        }
      </div>
    </main>
  );
}

export default Home;