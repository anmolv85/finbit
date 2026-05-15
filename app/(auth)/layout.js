// File purpose: app\(auth)\layout.js
// This file is part of the Next.js application routes, pages, or layout and defines how the user interface and data are rendered.
// It is written to help beginners understand how this file connects to the rest of the app.

import React from 'react'

// AuthLayout: layout component that wraps pages and defines the shared structure for this route.
const AuthLayout = ({ children }) => {
  return (
    <div className='flex justify-center pt-40'>
      {children}
    </div>
  )
}

export default AuthLayout
