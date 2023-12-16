import React from 'react'

const Layout = ({children, className, id}) => {
  return (
    <section id={id} className={`min-h-screen mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1050px] ${className}`}>
      {children}
    </section>
  )
}

export default Layout