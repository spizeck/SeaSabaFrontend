import * as React from 'react';
import {useForm} from 'react-hook-form';
import {TextField, Grid, Button, Typography} from '@mui/material';

export function AddHotelForm(onSubmit) {
  const {register, handleSubmit, formState: {errors}} = useForm();

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" gutterBottom>
        Add New Hotel
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register('name', {
              required: "Hotel name is required",
              maxLength: {
                value: 50,
                message: "The hotel name should have at most 50 characters",
              }
            })}
            error={Boolean(errors.name)}
            helperText={errors.name?.message as string}
            required
            fullWidth
            label="Hotel Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register('location', {
              required: "Location is required",
              maxLength: {
                value: 100,
                message: "The location should have at most 100 characters",
              }
            })}
            error={Boolean(errors.location)}
            helperText={errors.location?.message as string}
            required
            fullWidth
            label="Location"
            name="location"
            autoComplete="location"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            {...register('contact_info', {
              required: "Contact info is required",
            })}
            error={Boolean(errors.contact_info)}
            helperText={errors.contact_info?.message as string}
            required
            fullWidth
            label="Contact Info"
            name="contact_info"
            multiline
            rows={2}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register('amenities')}
            fullWidth
            label="Amenities"
            name="amenities"
            autoComplete="amenities"
            multiline
            rows={2}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register('policies')}
            fullWidth
            label="Policies"
            name="policies"
            autoComplete="policies"
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register('description')}
            fullWidth
            label="Description"
            name="description"
            autoComplete="description"
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
