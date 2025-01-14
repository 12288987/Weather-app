import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='h-40 bg-gray-400 py-14'>
            <div>For more information visit <Link href="https://www.accuweather.com/">accuweather</Link></div>
            <p>&copy; Ebro dev Inc.</p>
        </div>
    </>
  )
}

export default Footer