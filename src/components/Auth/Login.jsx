import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900'>
      {/* Login Form */}
      <div className='border-2 rounded-2xl border-emerald-600 dark:border-emerald-500 p-10 shadow-lg bg-white dark:bg-gray-800'>
        <h1 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-6 text-center">Login</h1>
        <form
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center w-80'
        >
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className='outline-none bg-transparent border-2 border-emerald-600 dark:border-emerald-500 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-gray-100 w-full'
            type="email"
            placeholder='Enter your email'
          />
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className='outline-none bg-transparent border-2 border-emerald-600 dark:border-emerald-500 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-gray-100 w-full'
            type="password"
            placeholder='Enter password'
          />
          <button
            className='mt-5 text-white hover:bg-emerald-700 dark:hover:bg-emerald-600 font-semibold bg-emerald-600 dark:bg-emerald-500 text-lg py-2 px-8 w-full rounded-full transition'
          >
            Log in
          </button>
        </form>
      </div>

      {/* Demo Credentials */}
      <div className='mt-10 p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md w-[28rem]'>
        <h2 className='text-lg font-semibold text-emerald-700 dark:text-emerald-400 mb-2 text-center'>Demo Credentials</h2>
        <div className='space-y-2 text-gray-700 dark:text-gray-300 text-sm'>
          <p>
            <span className='font-semibold'>Admin:</span> <br />
            Email: <code className='bg-white dark:bg-gray-700 px-1 rounded'>admin@me.com</code> <br />
            Password: <code className='bg-white dark:bg-gray-700 px-1 rounded'>123</code>
          </p>
          <hr className="my-2 border-gray-300 dark:border-gray-600" />
          <p><span className='font-semibold'>Employees:</span></p>
          <ul className='list-disc list-inside pl-2 space-y-1'>
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                Email: <code className='bg-white dark:bg-gray-700 px-1 rounded'>employee{i + 1}@example.com</code> — 
                Password: <code className='bg-white dark:bg-gray-700 px-1 rounded'>123</code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Login
