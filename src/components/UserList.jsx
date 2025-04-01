import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import { users as mockUsers } from '../data/users';

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  // Mock การโหลดข้อมูล
  useEffect(() => {
    const timeout = setTimeout(() => {
      setUsers(mockUsers); 
      setIsLoading(false); 
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);

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
            className="w-full px-4 py-3 rounded-full bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center mt-10">User list</h2>

      {isLoading ? (
        <div className="text-center text-gray-500 py-20 text-lg">กำลังโหลดข้อมูลผู้ใช้...</div>
      ) : filteredUsers.length > 0 ? (
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

      {!isLoading && (
        <div className="mt-6 text-sm text-gray-500">
          พบผู้ใช้ทั้งหมด {filteredUsers.length} คน
        </div>
      )}
    </div>
  );
};

export default UserList;
