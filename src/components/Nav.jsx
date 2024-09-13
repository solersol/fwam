


import { logoMain, cardImage1, img1 } from "../assets/images"; // Assuming you have twitterIcon and telegramIcon
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="w-full z-10">
      <nav className="bg-transparent border-4 border-black sticky top-6 start-0 rounded-lg mx-auto max-w-screen-xl p-4 z-20">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo Section */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logoMain} className="h-8" alt="Logo" />
          </a>

          {/* Twitter and Telegram Icons */}
          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
            <a
              href="https://x.com/PattieOnSol"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-black hover:scale-110 transition-transform"
            >
              <img
                src={img1}
                alt="Twitter"
                className="w-full h-full object-cover"
              />
            </a>
            <a
              href="https://t.me/RichPattie"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-black hover:scale-110 transition-transform"
            >
              <img
                src={cardImage1}
                alt="Telegram"
                className="w-full h-full object-cover"
              />
            </a>
          </div>

          {/* Nav Links */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block py-2 px-3 text-gray-900 rounded font-Matemasie hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
