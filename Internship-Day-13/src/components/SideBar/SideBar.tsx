 const SideBar = () => {
  return (
    <div className="bg-gray-800 dark:bg-gray-900 h-auto text-white w-72 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <a href="/dashboard" className="text-white flex items-center space-x-2 px-4">
        <i className="fas fa-shopping-bag text-2xl"></i>
        <span className="text-2xl font-extrabold">Admin</span>
      </a>
      <nav>
        {[
          { label: 'Dashboard', icon: 'fa-home', href: '/dashboard' },
          { label: 'Products', icon: 'fa-box', href: '/admin/dashboard/products' },
          { label: 'Orders', icon: 'fa-chart-bar', href: '/admin/dashboard/orders' },
          { label: 'Customers', icon: 'fa-users', href: '/dashboard/customers' },
          { label: 'Users', icon: 'fa-users', href: '/admin/dashboard/users' },
        ].map((item) => (
          <a
            key={item.href}
            href={''}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 dark:hover:bg-gray-700 hover:text-white"
          >
            <i className={`fas ${item.icon} mr-2`}></i> {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
 export default SideBar;