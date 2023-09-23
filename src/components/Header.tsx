function Header() {
  return (
    <div className="w-full h-16 flex justify-between items-center py-2 px-10 shadow-sm border border-gray-300">
      <div>
        <a href="/" className="text-xl font-bold">
          b2c support
        </a>
        {/* todo: change a to link  */}
      </div>
      <div>
        <a href="/tickets">Tickets</a>
        <a href="/profile" className="ml-4">
          Profile
        </a>
      </div>
    </div>
  );
}

export default Header;
