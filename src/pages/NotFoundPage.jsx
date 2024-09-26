import React from 'react'
import { Helmet } from 'react-helmet'

function NotFoundPage() {
  return (
    <>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <div>
      <h1>404</h1>
      <h1>Page Not Found</h1>
    </div>
    </>
  )
}

export default NotFoundPage