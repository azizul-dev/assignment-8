"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';



const NavLink = ({href, children}) => {
    const pathname = usePathname();

    const isActive = href === pathname;
    return (
        <Link href={href} className={`${isActive ? "bg-gradient-to-r from-emerald-400 to-green-600 text-white font-semibold shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-105 transition" : ""}`}>
            {children}
        </Link>
    );
};

export default NavLink;