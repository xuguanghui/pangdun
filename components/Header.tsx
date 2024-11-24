 "use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
  {
    name: 'Performance',
    link: '/performance'
  },
  {
    name: 'Reliablility',
    link: '/reliablility'
  },
  {
    name: 'Scale',
    link: '/scale'
  }
]
export default function Header() {
  const pathname = usePathname()
  return (
    <div className="absolute w-full z-10">
    <div className="flex justify-between container mx-auto p-8 text-white">
      <Link  className="text-3xl font-bold"  href="/">Home </Link>
      <div className="text-xl space-x-4" >
        {
          linkData.map((item, index) => (
            <Link key={index} className={pathname === item.link ? 'text-purple-500' :''} href={item.link}>{item.name}</Link>
          ))
        }


      </div>
    </div>
  </div>
  )
}
