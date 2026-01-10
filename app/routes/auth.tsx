import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter'

export const meta = () => ([
  { title: 'synAI | Auth' },
  { name: 'description', content: 'Log into your account' },
])

const Auth = () => {
  const { isLoading, auth, init } = usePuterStore();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const next = query.get('next') || '/';
  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next])

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className='gradient-border shadow-lg'>
        <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
          <div className='flex flex-col items-center gap-2 text-center'>
            <Link to='/' className='text-3xl font-bold text-gradient hover:opacity-80 transition-opacity mb-4'>
              synAI
            </Link>
            <h1>Welcome</h1>
            <h2>Log In To Continue Your Job Journey</h2>
          </div>
          <div>
            {isLoading ? (
              <button className='auth-button animate-pulse'>
                <p>Signing you in...</p>
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className='auth-button' onClick={auth.signOut}>
                    <p>Log out</p>
                  </button>
                ) : (
                  <button className='auth-button' onClick={auth.signIn}>
                    <p>Log in</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Auth