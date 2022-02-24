import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
      <div>
          <ul>
              <li>
                  <Link href="/products">
                      <a>Product</a>
                  </Link>
              </li>
              <li>
                  <Link href="/about">
                      <a>About</a>
                  </Link>
              </li>
              <li>
                  <Link href="/contact">
                      <a>Contact</a>
                  </Link>
              </li>
          </ul>
    </div>
  )
}
