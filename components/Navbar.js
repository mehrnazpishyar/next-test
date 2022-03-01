import React from 'react'
import Link from 'next/link'
import { menu } from "../constants/constants";


const Navbar = () => {
  return (
      <div className=''>
          <ul className='flex justify-center mt-6'>
              {
                  menu.map((i) => {
                      return (
                          <li key={i.name} className="flex" >
                              <Link href={i.path}>
                                  <a className="px-6 py-2 bg-violet-700 text-base m-3 hover:bg-violet-600 text-white rounded-full ">
                                      {i.name}
                                  </a>
                              </Link>
                          </li>
                      );
                  })
              }
          </ul>  
    </div>
  )
}

export default Navbar