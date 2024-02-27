import * as React from 'react';
import {useForm} from 'react-hook-form';
import {TextField, Grid, Button, Typography} from '@mui/material';

export function AddHotelForm() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" gutterBottom>
        Add New Hotel
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register('hotel-name', {
              required: "Hotel name is required",
            })}
            error={Boolean(errors.name)}
            helperText={errors.name?.message as string}
            required
            fullWidth
            label="Hotel Name"
            name="hotel-name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register('location')}
            error={Boolean(errors.location)}
            helperText={errors.location?.message as string}
            fullWidth
            label="Location"
            name="location"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            {...register('contact_info')}
            error={Boolean(errors.contact_info)}
            helperText={errors.contact_info?.message as string}
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
