import * as React from 'react'
import {useForm} from 'react-hook-form'
import {TextField, Button, Checkbox, FormControlLabel} from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import MainLayout from "@/layouts/MainLayout";
import {AddHotelForm} from "@/components/forms/AddHotelForm";

export default function GroupContract() {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <MainLayout>
      <Container>
<AddHotelForm onSubmit={handleSubmit(onSubmit)} errors={errors} register={register} />
      </Container>
    </MainLayout>
  )
}