import React from 'react'
import Link from 'next/link'

const Products = () => {
  return (
    <div className='mt-6'>
      <Link href="/"><a className="ml-10 text-2xl px-5 py-3 bg-red-400 rounded-md">Back to Home</a></Link>

      <h1 className='text-center text-red-700 mt-36 text-8xl'>This is Products Page</h1>

    </div>
  )
}

export default Products