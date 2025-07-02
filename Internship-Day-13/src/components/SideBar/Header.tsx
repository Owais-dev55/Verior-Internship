import  { useState } from 'react';

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Welcome to the Trendify Dashboard
        </h1>
        <div className="flex items-center space-x-4">
         

          <button className="text-gray-500 dark:text-gray-300 focus:outline-none lg:hidden">
            <i className="fas fa-bars text-xl"></i>
          </button>

          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center focus:outline-none"
            >
              <i className="fas fa-user text-xl text-gray-600 dark:text-gray-300"></i>
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md overflow-hidden shadow-xl z-10">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;