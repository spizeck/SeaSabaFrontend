import React from 'react'
import {AppProps} from 'next/app'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter'
import {ThemeProvider} from '@mui/material/styles'
import theme from '../styles/theme'
import '../styles/globals.css'


function MyApp({Component, pageProps}: AppProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default MyApp