import React from 'react';
import NextLink from 'next/link'
import {useForm} from 'react-hook-form';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Copyright from "@/components/Copyright";

export default function SignUp() {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const password = watch('password')

  // @ts-ignore
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{m: 1, backgroundColor: 'primary.main'}}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register('userName', {
                  required: true,
                  validate: {
                    minLength: (v) =>
                      v.length >= 3 || 'User name must be at least 3 characters long',
                    maxLength: (v) =>
                      v.length <= 20 || 'User name must be at most 20 characters long',
                    matchPattern: (v) =>
                      /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/.test(v) ||
                      'User name must contain only letters, numbers, dashes and underscores',
                  }
                })}
                error={Boolean(errors.userName)}
                helperText={errors.userName?.message as string}
                required
                fullWidth
                label="User Name"
                name="userName"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register('email', {
                  required: true,
                  validate: {
                    maxLength: (v) =>
                      v.length <= 50 || "The email should have at most 50 characters",
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Please enter a valid email",
                  }
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message as string}
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                type='email'

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('password', {
                    required: true,
                    validate: {
                      minLength: (v) =>
                        v.length >= 6 || 'Password must be at least 6 characters long',
                    },
                  }
                )}
                error={Boolean(errors.password)}
                helperText={errors.password?.message as string}
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('confirmPassword', {
                required: true,
                validate: {
                  value: (v) =>
                    v === password || 'Passwords do not match',
                }
                })}
                error={Boolean(errors.confirmPassword)}
                helperText={errors.confirmPassword?.message as string}
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                autoComplete="confirm-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <MuiLink component={NextLink} href={"/signin"}>
                Already have an account? Sign in
              </MuiLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{mt: 5}}/>
    </Container>
  );
}