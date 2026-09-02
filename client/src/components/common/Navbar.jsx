import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#EFEFEF]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Brand Name */}
        <NavLink
          to="/"
          className="text-xl font-semibold text-[#07426A]"
        >
          Delta Galaxy
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-5 py-2 rounded-full font-['Oswald'] text-sm transition-all duration-300 ${
                isActive
                  ? "bg-[#F98D21] text-white"
                  : "bg-white/70 text-[#07426A] hover:bg-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-5 py-2 rounded-full font-['Oswald'] text-sm transition-all duration-300 ${
                isActive
                  ? "bg-[#F98D21] text-white"
                  : "bg-white/70 text-[#07426A] hover:bg-white"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `px-5 py-2 rounded-full font-['Oswald'] text-sm transition-all duration-300 ${
                isActive
                  ? "bg-[#F98D21] text-white"
                  : "bg-white/70 text-[#07426A] hover:bg-white"
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-5 py-2 rounded-full font-['Oswald'] text-sm transition-all duration-300 ${
                isActive
                  ? "bg-[#F98D21] text-white"
                  : "bg-white/70 text-[#07426A] hover:bg-white"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;


// import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/about">About</NavLink>
//       <NavLink to="/services">Services</NavLink>
//       <NavLink to="/contact">Contact</NavLink>
//     </nav>
//   );
// }

// export default Navbar;
