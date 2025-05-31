import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg relative">
      <div className="after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-300 after:to-pink-500">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-2xl font-bold text-pink-300 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
              🗼 東京之旅
            </div>

            {/* 漢堡選單按鈕 - 只在手機版顯示 */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* 桌面版選單 */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" text="首頁" emoji="🏠" />
              <NavLink to="/disneyland" text="迪士尼專區" emoji="📖" />
              <NavLink to="/hotel" text="住宿資訊" emoji="🏨" />
              <NavLink to="/expense" text="花費資訊" emoji="💰" />
              <NavLink to="/transportation" text="交通資訊" emoji="🚗" />
            </div>
          </div>

          {/* 手機版選單 */}
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} pt-4`}>
            <div className="flex flex-col space-y-2">
              <MobileNavLink
                to="/"
                text="首頁"
                emoji="🏠"
                onClick={() => setIsMenuOpen(false)}
              />
              <MobileNavLink
                to="/disneyland"
                text="迪士尼專區"
                emoji="📖"
                onClick={() => setIsMenuOpen(false)}
              />
              <MobileNavLink
                to="/hotel"
                text="住宿資訊"
                emoji="🏨"
                onClick={() => setIsMenuOpen(false)}
              />
              <MobileNavLink
                to="/expense"
                text="花費資訊"
                emoji="💰"
                onClick={() => setIsMenuOpen(false)}
              />
              <MobileNavLink
                to="/transportation"
                text="交通資訊"
                emoji="🚗"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// 桌面版導航連結組件
const NavLink = ({
  to,
  text,
  emoji,
}: {
  to: string;
  text: string;
  emoji: string;
}) => (
  <Link to={to} className="nav-link group relative px-3 py-2">
    <span className="relative z-10 group-hover:text-pink-300 transition-colors duration-300">
      {emoji} {text}
    </span>
    <div className="absolute inset-0 h-0.5 bg-pink-300 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
  </Link>
);

// 手機版導航連結組件
const MobileNavLink = ({
  to,
  text,
  emoji,
  onClick,
}: {
  to: string;
  text: string;
  emoji: string;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md transition-colors duration-300"
    onClick={onClick}
  >
    <span className="flex items-center">
      {emoji} <span className="ml-2">{text}</span>
    </span>
  </Link>
);

export default Navbar;
