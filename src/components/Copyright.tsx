import * as React from 'react'
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import NextLink from 'next/link'

export default function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <MuiLink component={NextLink} href={"https://seasaba.com/"} color={'inherit'}>
        Sea Saba N.V.
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}