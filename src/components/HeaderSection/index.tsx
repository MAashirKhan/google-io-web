import React, { useState} from "react";
import { NavLink } from "react-router-dom";

const HeaderSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <nav className="w-11/12 lg:w-4/5 max-w-6xl">
        <div className="flex items-center justify-between w-full  px-2 md:px-6 py-3 mt-4 rounded-2xl backdrop-blur-lg bg-white/40 border-2 border-[#e49348] shadow-lg">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={"/assets/header_logo.svg"}
              className="h-12 md:h-14"
              alt="GDG Logo"
            />
          </NavLink>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium hover:text-black/80 transition-all duration-200 px-4 py-2 rounded-lg ${
                  isActive ? "text-white shadow-lg" : "text-black/90"
                }`
              }
              style={({ isActive }) => 
                isActive ? { background: 'linear-gradient(rgb(251, 188, 4), rgb(255, 144, 42), rgb(234, 67, 53))' } : {}
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `font-medium hover:text-black/80 transition-all duration-200 px-4 py-2 rounded-lg ${
                  isActive ? "text-white shadow-lg" : "text-black/90"
                }`
              }
              style={({ isActive }) => 
                isActive ? { background: 'linear-gradient(rgb(251, 188, 4), rgb(255, 144, 42), rgb(234, 67, 53))' } : {}
              }
            >
              Team
            </NavLink>
            <NavLink
              to="/badge"
              className={({ isActive }) =>
                `font-medium hover:text-black/80 transition-all duration-200 px-4 py-2 rounded-lg ${
                  isActive ? "text-white shadow-lg" : "text-black/90"
                }`
              }
              style={({ isActive }) => 
                isActive ? { background: 'linear-gradient(rgb(251, 188, 4), rgb(255, 144, 42), rgb(234, 67, 53))' } : {}
              }
            >
              Create Badge
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `font-medium hover:text-black/80 transition-all duration-200 px-4 py-2 rounded-lg ${
                  isActive ? "text-white shadow-lg" : "text-black/90"
                }`
              }
              style={({ isActive }) => 
                isActive ? { background: 'linear-gradient(rgb(251, 188, 4), rgb(255, 144, 42), rgb(234, 67, 53))' } : {}
              }
            >
              FAQ's
            </NavLink>
          </div>

          {/* Register Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <NavLink
              to={"https://forms.gle/QXFMk4nqhxgLs6xn7"}
              className="px-2 md:px-6 py-2.5 rounded-full cursor-pointer text-white font-medium text-sm hover:scale-105 transition-transform duration-200 shadow-lg backdrop-blur-sm bg-white/20 border border-white/30"
              style={{ background: 'linear-gradient(180deg,#fbbc04,#ff902a,#ea4335)' }}
            >
              Register Now
            </NavLink>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              type="button"
              className="lg:hidden inline-flex items-center p-2 text-black hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden mt-4 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          id="mobile-menu"
        >
          <div className="backdrop-blur-md bg-black/60 rounded-2xl border border-white/10 p-4 max-w-sm mx-auto shadow-lg">
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 ${
                      isActive ? "shadow-lg" : "hover:bg-white/10"
                    }`
                  }
                  style={({ isActive }) => 
                    isActive ? { background: 'linear-gradient(rgb(251, 188, 4), rgb(255, 144, 42), rgb(234, 67, 53))' } : {}
                  }
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 ${
                      isActive ? "shadow-lg" : "hover:bg-white/10"
                    }`
                  }
                  style={({ isActive }) => 
                    isActive ? { background: 'linear-gradient(rgb(251, 188, 4), rgb(255, 144, 42), rgb(234, 67, 53))' } : {}
                  }
                  onClick={toggleMenu}
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/badge"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 ${
                      isActive ? "shadow-lg" : "hover:bg-white/10"
                    }`
                  }
                  style={({ isActive }) => 
                    isActive ? { background: 'linear-gradient(rgb(251, 188, 4), rgb(255, 144, 42), rgb(234, 67, 53))' } : {}
                  }
                  onClick={toggleMenu}
                >
                  Create Badge
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 ${
                      isActive ? "shadow-lg" : "hover:bg-white/10"
                    }`
                  }
                  style={({ isActive }) => 
                    isActive ? { background: 'linear-gradient(rgb(251, 188, 4), rgb(255, 144, 42), rgb(234, 67, 53))' } : {}
                  }
                  onClick={toggleMenu}
                >
                  FAQ's
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;
