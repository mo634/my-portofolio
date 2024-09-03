import Link from 'next/link'
import React from 'react'
import { headerLinks } from '../../../constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation';
const HeaderLinkComponent = () => {

    const pathname = usePathname();
    console.log(pathname)
    return (
        <>

            {headerLinks.map((link: any) => (
                <Link href={link.href}
                    className='relative link-style group z-10 px-2'
                >
                    {link.name}
                    <span className={`${pathname === link.href ? 'fixed-link-style' : ''}`}></span>
                </Link >
            ))}
        </>
    )
}

export default HeaderLinkComponent