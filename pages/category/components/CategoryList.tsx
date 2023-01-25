import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import CommentIcon from '@mui/icons-material/Comment'
import { Box, Grid, Typography } from '@mui/material'

export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0])

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <Grid container columns={12}>
      <Grid item xs={12}>
        <Box className="bg-zinc-700 text-black rounded-lg p-5">
          <Grid container>
            <Grid item className="mb-3">
              <Typography fontSize={20} className="text-white font-bold">
                Lista de categorias
              </Typography>
            </Grid>
          </Grid>
          <Grid container className="rounded-lg">
            <Grid item xs={12} className="rounded-lg">
              <List className="w-full rounded-lg">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                  (value) => {
                    const labelId = `checkbox-list-label-${value}`

                    return (
                      <ListItem
                        className="w-full rounded-lg mb-3 bg-zinc-600 hover:bg-purple-900"
                        key={value}
                        secondaryAction={
                          <IconButton edge="end" aria-label="comments">
                            <CommentIcon />
                          </IconButton>
                        }
                        disablePadding
                      >
                        <ListItemButton
                          role={undefined}
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            id={labelId}
                            primary={`Line item ${value + 1}`}
                          />
                        </ListItemButton>
                      </ListItem>
                    )
                  }
                )}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}
