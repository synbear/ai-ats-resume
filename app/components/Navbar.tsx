import React, { useState } from 'react'
import { Link } from 'react-router'
import WipeResumesModal from './WipeResumesModal';
import { usePuterStore } from '~/lib/puter';

const Navbar = () => {
  const [isWipeModalOpen, setIsWipeModalOpen] = useState(false);
  const { auth } = usePuterStore();

  const handleLogout = async () => {
    if (confirm('Are you sure you want to logout?')) {
      await auth.signOut();
      window.location.reload();
    }
  }

  return (
    <>
      <nav className='navbar'>
        <Link to="/">
          <p className='text-2xl font-bold text-gradient'>synAI</p>
        </Link>
        <div className='flex gap-4 items-center'>
          {auth.isAuthenticated ? (
            <>
              <button
                onClick={() => setIsWipeModalOpen(true)}
                className='text-gray-500 hover:text-red-600 font-medium text-sm transition-colors cursor-pointer'
              >
                Wipe Data
              </button>
              <Link to='/upload' className='primary-button w-fit'>
                Upload Resume
              </Link>
              <button
                onClick={handleLogout}
                className='cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors'
                title='Logout'
              >
                <img src='/icons/logout.svg' className='w-5 h-5 opacity-60 hover:opacity-100' alt='logout' />
              </button>
            </>
          ) : (
            <Link to='/auth' className='primary-button w-fit'>
              Login
            </Link>
          )}
        </div>
      </nav>
      <WipeResumesModal isOpen={isWipeModalOpen} onClose={() => setIsWipeModalOpen(false)} />
    </>
  )
}

export default Navbar