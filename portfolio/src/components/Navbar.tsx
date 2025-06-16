import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-5 w-full">
      <div className="px-4 flex items-end justify-between">
        <img
          src="../images/logo.svg"
          alt="Nathalie Merdan Logo"
          className="h-12"
          onClick={handleLogoClick}
        />

        <div className="flex items-center tracking-wider">
          <div className="flex items-center gap-6 text-lg">
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
