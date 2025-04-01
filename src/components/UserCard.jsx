import React from 'react';

const UserCard = ({ name, email, image }) => {
  return (
    <div className="bg-gray-40 rounded-lg shadow-sm p-9 hover:shadow-lg">
      <div className="flex flex-col items-center text-center">
        <img 
          src={image} 
          alt={`${name}'s profile`} 
          className="w-20 h-20 rounded-full mb-3 object-cover border border-gray-300" 
        />
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600 text-sm">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
