import React from 'react';
import Button from './Button';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header className="bg-gray-100 p-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
             className="text-gray-800 mr-2">
          {/* SVG content unchanged */}
        </svg>
        <h1 className="text-xl font-bold text-gray-800">Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="text-sm text-gray-700 mr-4">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button label="Log out" onClick={onLogout} type="negative"/>
          </>
        ) : (
          <>
            <Button label="Log in" onClick={onLogin} type="primary" />
            <Button label="Sign up" onClick={onCreateAccount} type="positive" />
          </>
        )}
      </div>
    </div>
  </header>
);
