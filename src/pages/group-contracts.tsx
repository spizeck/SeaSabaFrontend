import * as React from 'react'
import Container from '@mui/material/Container'
import MainLayout from "@/layouts/MainLayout";
import {AddHotelForm} from "@/components/forms/AddHotelForm";


export default function GroupContract() {

  return (
    <MainLayout>
      <Container>
        <AddHotelForm />
      </Container>
    </MainLayout>
  )
}