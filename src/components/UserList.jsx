import React, { useState } from 'react';
import UserCard from './UserCard';
import { users } from '../data/users';

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="ค้นหาผู้ใช้..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center mt-10">User list</h2>
      {filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredUsers.map((user) => (
            <UserCard 
              key={user.id} 
              name={user.name} 
              email={user.email} 
              image={user.image} 
            />
          ))}
        </div>  
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <svg className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-gray-500 text-lg">ไม่พบผู้ใช้ที่ค้นหา</p>
        </div>
      )}

      <div className="mt-6 text-sm text-gray-500">
        พบผู้ใช้ทั้งหมด {filteredUsers.length} คน
      </div>
    </div>
  );
};

export default UserList;
