import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'

const MobileNav = () => {
  return (
    <div>
      {/* Overlay */}
      <div className="fixed inset-0 transform transition-all duration-500 z-[1000] bg-black opacity-70 w-full h-screen">
      </div>

      {/* Navigation Links */}
      <div className="text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]">
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MobileNav