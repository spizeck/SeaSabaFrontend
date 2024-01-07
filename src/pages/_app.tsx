import React from 'react'
import {AppProps} from 'next/app'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter'
import '../styles/globals.css'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AppRouterCacheProvider >
      <Component {...pageProps} />
    </AppRouterCacheProvider>
  )
}

export default MyApp