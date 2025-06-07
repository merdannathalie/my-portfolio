import { Link } from "react-router-dom";

function NavBar() {
//   const toggleDropdown = (menuId: string) => {
//     const menu = document.getElementById(menuId);
//     if (menu) {
//       menu.classList.toggle("hidden");
//     }
//   };

  return (
    <nav className="sticky top-0 z-50 bg-white w-full">
      <div className="px-4 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">Nathalie Merdan</div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
             <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
            <Link to="/work" className="hover:text-blue-500">
              Work
            </Link>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
