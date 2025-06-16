import { Link } from "react-router-dom";

function NavBar() {
  //   const toggleDropdown = (menuId: string) => {
  //     const menu = document.getElementById(menuId);
  //     if (menu) {
  //       menu.classList.toggle("hidden");
  //     }
  //   };

  return (
    <nav className="sticky top-0 z-5 w-full">
      <div className="px-4 flex items-end justify-between">
        <img
          src="../images/logo.svg"
          alt="Nathalie Merdan Logo"
          className="h-12"
        />

        <div className="flex items-center tracking-wider">
          <div className="flex items-center gap-6 text-lg">
            <Link to="/about">
              About 
            </Link>
            <Link to="/work">
              Work
            </Link>
            <Link to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
