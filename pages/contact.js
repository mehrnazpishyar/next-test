import React from 'react'
import Link from 'next/link'

 const Contact = () => {
  return (
    <div className='mt-6'>
      <Link href="/"><a className="ml-10 text-2xl px-5 py-3 bg-blue-400 rounded-md">Back to Home</a></Link>

      <h1 className='text-center text-blue-700 mt-36 text-8xl'>This is Contact Page</h1>

    </div>
  )
}

export default Contact