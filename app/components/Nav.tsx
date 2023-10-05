'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Nav = () => {
  const pathname = usePathname()

  return (
    <div className='flex flex-col items-start'>
      <h2>asdf-next</h2>
      <nav className='flex justify-center gap-2 text-xl'>
        <Link href='/'>Image</Link>
        <span>–</span>
        <Link href='/counter'>Counter</Link>
      </nav>
    </div>
  )
}
