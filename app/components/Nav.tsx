'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className='flex justify-center gap-2'>
      <Link href='/' className='text-xl'>
        Home
      </Link>
      <Link href='/verify' className='text-xl'>
        Verify
      </Link>
    </nav>
  )
}
