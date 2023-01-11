import { Grid } from '@mui/material'
import MainMenu from '../components/MainMenu'
import Navbar from './Navbar'

export default function MainLayout({ children, ...props }) {
  const {} = props

  return (
    <main className="bg-neutral-900 h-screen w-screen">
      <div className="mx-auto w-full h-full container p-10">
        <div className="bg-black border-2 border-violet-500 rounded-lg w-full h-full">
          <Grid container>
            <Grid item sm={12}>
              <Navbar />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sm={2}>
              <MainMenu />
            </Grid>
            <Grid item sm={10}>
              {children}
            </Grid>
          </Grid>
        </div>
      </div>
    </main>
  )
}
