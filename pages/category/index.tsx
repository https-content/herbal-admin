import { Grid, Typography } from '@mui/material'
import MainLayout from '../../components/MainLayout'
import CategoryList from './components/CategoryList'
import { Box } from '@mui/system'

export default function Category() {
  return (
    <MainLayout>
      <CategoryList />
    </MainLayout>
  )
}
