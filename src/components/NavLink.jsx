"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';



const NavLink = ({href, children, onClick}) => {
    const pathname = usePathname();

    const isActive = href === pathname;
    return (
       <Link 
          href={href} 
            onClick={onClick}  
          className={`
            block px-4 py-2 rounded-lg   // 🔥 PROBLEM FIX 1: আগে এটা ছিল না → click area ছোট ছিল
            ${isActive 
              ? "bg-gradient-to-r from-emerald-400 to-green-600 text-white font-semibold shadow-[0_0_30px_rgba(34,197,94,0.5)]"
              : "text-gray-700 hover:bg-green-50"  
            }
          `}
        >
            {children}
        </Link>

    );
};

export default NavLink;