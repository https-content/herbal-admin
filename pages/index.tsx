import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import MainLayout from '../components/MainLayout'
import { Box, Grid, Typography } from '@mui/material'

export default function Home() {
  const { user } = useContext(AuthContext)
  const [isLoading, setLoading] = useState()

  return (
    <MainLayout>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="w-full h-full"
      >
        <Grid item>
          <Typography className="text-white">Soon...</Typography>
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'auth.token': token } = parseCookies(ctx)

  console.log({ token })

  if (!token) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
