import { Grid } from '@mui/material'
import MainLayout from '../../components/MainLayout'
import ProductList from './components/ProductList'

export default function Product() {
  return (
    <MainLayout>
      <Grid item xs={12}>
        <ProductList />
      </Grid>
    </MainLayout>
  )
}
