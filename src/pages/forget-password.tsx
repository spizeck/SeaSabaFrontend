import * as React from 'react'
import Link from 'next/link'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://seasaba.com/">
        Sea Saba N.V.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function ForgetPassword() {
  return(
    <h1>Forgot Password Component</h1>
  )
}