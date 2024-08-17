// components/Header.js
"use client"
import Link from 'next/link';
const Header = () => {

  return (
    <header className="bg-primary max-md:hidden h-[10vh] shadow-md">
      <nav className="flex justify-around items-center h-full ">
        <Link href="/" className="link-style">
          Home
        </Link>
        <Link href="/skills" className="link-style">
          Skills
        </Link>
        <Link href="/projects" className="link-style">
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Header;
