import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import DELTA_GALAXY from "../../assets/DELTA_GALAXY.png";

const navLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Delta Galaxy Journey", to: "/about/journey" },
      { label: "Our Team", to: "/about/team" },
      { label: "Quality", to: "/about/quality" },
    ],
  },
  {
    label: "Investors",
    to: "/investors",
    children: [
      { label: "Annual Report", to: "/investors/annual-report" },
      { label: "Policies", to: "/investors/policies" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Infrastructure Services", to: "/services/infrastructure" },
      { label: "Mining Works", to: "/services/mining" },
      { label: "Transportation Services", to: "/services/transportation" },
      { label: "Equipments & Machinery", to: "/services/equipment" },
      { label: "Human Resources", to: "/services/hr" },
      { label: "Works Contract Services", to: "/services/works-contract" },
      { label: "Electrical Systems", to: "/services/electrical" },
    ],
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#EFEFEF] rounded-2xl shadow-sm">
      <div className="max-w-8xl mx-auto px-3 py-3 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/">
          <img
            src={DELTA_GALAXY}
            alt="Delta Galaxy"
            className="h-12 w-auto object-contain"
          />
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-2">

          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() =>
                link.children && setOpenDropdown(link.label)
              }
              onMouseLeave={() =>
                link.children && setOpenDropdown(null)
              }
            >

              {/* Main Navigation Button */}
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full font-['Oswald'] text-sm flex items-center gap-1 transition-all duration-300 ${
                    isActive
                      ? "bg-[#F98D21] text-white"
                      : "bg-white/70 text-[#07426A] hover:bg-white"
                  }`
                }
              >
                {link.label}

                {link.children && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openDropdown === link.label
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                )}
              </NavLink>

              {/* Dropdown */}
              {link.children && (
                <div
                  className={`absolute top-full right-0 pt-2 transition-all duration-200 ${
                    openDropdown === link.label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="w-[260px] bg-white border border-[#DDD2BE] rounded-xl shadow-lg overflow-hidden p-2">

                    {link.children.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                          `block px-4 py-3 text-sm font-['Oswald'] transition-colors ${
                            isActive
                              ? "text-[#F98D21] bg-[#F6F2E9]"
                              : "text-[#4B5459] hover:text-[#07426A] hover:bg-[#F6F2E9]"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}

                  </div>
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;


// import { NavLink } from "react-router-dom";
// import DELTA_GALAXY from "../../assets/DELTA_GALAXY.png";

// function Navbar() {
//   return (
//     <nav className="fixed top-2 left-1/2 -translate-x-1/2 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#EFEFEF] rounded-2xl shadow-sm">
//       <div className="max-w-8xl mx-auto px-3 py-3 flex items-center justify-between">

//         {/* Logo / Brand Name */}
//         <NavLink
//           to="/"
//           className="text-xl font-semibold text-[#07426A]"
//         >
//           <img
//             src={DELTA_GALAXY}
//             alt="Delta Galaxy"
//             className="h-12 w-auto object-contain"
//           />
//         </NavLink>

//         {/* Navigation */}
//         <div className="flex items-center gap-2">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `px-5 py-2 rounded-full font-['Oswald'] text-sm transition-all duration-300 ${
//                 isActive
//                   ? "bg-[#F98D21] text-white"
//                   : "bg-white/70 text-[#07426A] hover:bg-white"
//               }`
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               `px-5 py-2 rounded-full font-['Oswald'] text-sm transition-all duration-300 ${
//                 isActive
//                   ? "bg-[#F98D21] text-white"
//                   : "bg-white/70 text-[#07426A] hover:bg-white"
//               }`
//             }
//           >
//             About
//           </NavLink>

//           <NavLink
//             to="/services"
//             className={({ isActive }) =>
//               `px-5 py-2 rounded-full font-['Oswald'] text-sm transition-all duration-300 ${
//                 isActive
//                   ? "bg-[#F98D21] text-white"
//                   : "bg-white/70 text-[#07426A] hover:bg-white"
//               }`
//             }
//           >
//             Services
//           </NavLink>

//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               `px-5 py-2 rounded-full font-['Oswald'] text-sm transition-all duration-300 ${
//                 isActive
//                   ? "bg-[#F98D21] text-white"
//                   : "bg-white/70 text-[#07426A] hover:bg-white"
//               }`
//             }
//           >
//             Contact
//           </NavLink>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;
