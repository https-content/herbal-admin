import {
  Box,
  Grid,
  Pagination,
  PaginationItem,
  Typography,
} from '@mui/material'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function Paginator({ ...props }) {
  return (
    <Grid className="bottom-0" container columns={12}>
      <Grid
        container
        item
        justifyContent="center"
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Box className="bg-zinc-800 rounded-full p-3 flex items-center">
          <Pagination
            count={10}
            color="secondary"
            renderItem={(item) => (
              <PaginationItem
                className="text-white "
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Box>
      </Grid>
    </Grid>
  )
}
