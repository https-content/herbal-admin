import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import MainLayout from '../../components/MainLayout'
import Panels from './components/Panels'
import { useRouter } from 'next/router'

export default function DashboardPage() {
  const router = useRouter()

  function goTo(route: string) {
    router.push(route)
  }

  return (
    <MainLayout>
      <Grid container className="h-full w-full flex" justifyContent="center">
        <Grid container xs={12} md={6} xl={4} item className="p-8">
          <Box className="container">
            <Typography className="text-gray-100 text-3xl">
              Painel de controle
            </Typography>
            <Panels goTo={goTo} />
          </Box>
        </Grid>
        <Grid container xs={12} md={6} xl={4} item className="p-8">
          <Box className="container p-3 bg-zinc-700 rounded-xl">
            <List>
              <ListItem>
                <ListItemText primary="Bom dia" />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  )
}
