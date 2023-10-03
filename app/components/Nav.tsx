'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex gap-2 justify-center">
      <Link href="/" className="text-xl">
        Home
      </Link>
      <Link href="/verify" className="text-xl">
        Verify
      </Link>
    </nav>
  )
}
