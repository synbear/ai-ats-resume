import React, { useState } from 'react'
import { Link } from 'react-router'
import WipeResumesModal from './WipeResumesModal';

const Navbar = () => {
  const [isWipeModalOpen, setIsWipeModalOpen] = useState(false);

  return (
    <>
      <nav className='navbar'>
        <Link to="/">
          <p className='text-2xl font-bold text-gradient'>synAI</p>
        </Link>
        <div className='flex gap-4 items-center'>
          <button
            onClick={() => setIsWipeModalOpen(true)}
            className='text-gray-500 hover:text-red-600 font-medium text-sm transition-colors cursor-pointer'
          >
            Wipe Data
          </button>
          <Link to='/upload' className='primary-button w-fit'>
            Upload Resume
          </Link>
        </div>
      </nav>
      <WipeResumesModal isOpen={isWipeModalOpen} onClose={() => setIsWipeModalOpen(false)} />
    </>
  )
}

export default Navbar