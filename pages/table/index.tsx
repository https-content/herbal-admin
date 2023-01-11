import { Grid, Typography } from '@mui/material'
import MainLayout from '../../components/MainLayout'
import { Box } from '@mui/system'

export default function Table() {
  return (
    <MainLayout>
      <Grid container>
        <Grid item>
          <Box sx={{ p: 2 }}>
            <Typography>Tabelas</Typography>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  )
}
