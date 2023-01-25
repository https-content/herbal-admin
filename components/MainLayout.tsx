import { Grid, Hidden, Toolbar } from '@mui/material'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { useState } from 'react'
import SearchToolbar from './Toolbar/Toolbar'

export default function MainLayout({ children, ...props }) {
  const { hasToolbar, menuOpen } = props
  const [$toolbar, setToolbar] = useState(true)
  const [] = useState()

  return (
    <Grid
      container
      alignItems="start"
      className="h-screen w-screen"
      columns={12}
    >
      <Grid container item xs={12} className="w-full">
        <SearchToolbar />
      </Grid>
      <Grid
        container
        className="h-full pt-16"
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
      >
        {children}
      </Grid>
    </Grid>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'auth.token': token } = parseCookies(ctx)

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
