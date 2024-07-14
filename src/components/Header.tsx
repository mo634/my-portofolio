// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-primary p-4">
      <nav className="flex justify-around items-center">
        <Link href="/" className="link-style">
          Home
        </Link>
        <Link href="/skills" className="link-style">
          Skills
        </Link>
        <Link href="/projects" className="link-style">
          Projects
        </Link>
        <Link href="/about" className="link-style">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
