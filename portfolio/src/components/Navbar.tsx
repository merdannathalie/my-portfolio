function NavBar() {
  const toggleDropdown = (menuId: string) => {
    const menu = document.getElementById(menuId);
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white w-full">
      <div className="px-4 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">Nathalie Merdan</div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => toggleDropdown("menu1")}
              className="flex items-center gap-1 hover:text-blue-500"
            >
              About
            </button>
            <button
              onClick={() => toggleDropdown("menu1")}
              className="flex items-center gap-1 hover:text-blue-500"
            >
              Work
            </button>
            <button
              onClick={() => toggleDropdown("menu1")}
              className="flex items-center gap-1 hover:text-blue-500"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
