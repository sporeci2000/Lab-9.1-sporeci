import React from 'react';
import type { UserProfileCardProps} from '../../types';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children
}) => {
  return (
    <div className="border p-4 rounded shadow">
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-16 h-16 rounded-full mb-2"
        />
      )}
      <h2 className="text-lg font-bold">{user.name}</h2>
      {showEmail && <p className="text-sm text-gray-600">{user.email}</p>}
      {showRole && <p className="text-sm text-gray-600">{user.role}</p>}
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
        >
          Edit Profile
        </button>
      )}
      {children}
    </div>
  );
};