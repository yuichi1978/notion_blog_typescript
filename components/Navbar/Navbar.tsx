import { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <nav className="container mx-auto lg:px-2 px-5 lg:w-2/5">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-2xl font-medium">
          ShinCode
        </Link>
        <div>
          <ul className="flex items-center text-sm py-4">
            <li>
              <Link href="/" className="block px-4 py-2 hover:text-teal-400 transition-all duration-300">Home</Link>
            </li>
            <li>
              <Link href="https://twitter.com/" className="block px-4 py-2 hover:text-teal-400 transition-all duration-300">Twitter</Link>
            </li>
            <li>
              <Link href="https://qiita.com/" className="block px-4 py-2 hover:text-teal-400 transition-all duration-300">Qiita</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;