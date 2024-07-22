// components/Header.js
"use client"
import Link from 'next/link';
import CreateNewProject from './CreateProject';
import AdminOptions from './AdminOptions';
import { useAppSelector } from '@/store';


const Header = () => {
  const isAdmin = useAppSelector((state) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);
  return (
    <header className="bg-primary p-4 max-md:hidden">
      <nav className="flex justify-around items-center ">
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
        <span className='text-white'>
          {isAdmin && <AdminOptions />}
        </span>
      </nav>
    </header>
  );
};

export default Header;
