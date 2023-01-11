import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import MainLayout from '../components/MainLayout'
import { Box } from '@mui/material'

export default function Home() {
  const { user } = useContext(AuthContext)

  return (
    <MainLayout>
      <Box>
        
      </Box>
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
