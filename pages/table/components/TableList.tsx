import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import CommentIcon from '@mui/icons-material/Comment'
import { RemoveRedEye, VisibilityOff } from '@mui/icons-material'
import { EnumType } from 'typescript'
import { Grid } from '@mui/material'
import tables from '../../../tables.jsons'

enum MeasureType {
  G = 'g',
  ML = 'ml',
  UN = 'un',
}

export type TableItem = {
  id: string
  title: string
  description: string
  productId: string
  price: number
  measure: MeasureType
}

export type Table = {
  id: string
  items: TableItem[]
  title: string
  description: string
}

export const tables: Table[] = [
  {
    id: '1',
    title: '🌿 Tomates',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
  {
    id: '2',
    title: '🌿 Alimentos canábicos',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
  {
    id: '167',
    title: '🍭 MDMA',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
  {
    id: '346',
    title: '🌿 Tomates',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
  {
    id: '6',
    title: '🌿 Alimentos canábicos',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
  {
    id: '53',
    title: '🍭 MDMA',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
  {
    id: '34',
    title: '🌿 Tomates',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
  {
    id: '7',
    title: '🌿 Alimentos canábicos',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
  {
    id: '36234723',
    title: '🍭 MDMA',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
  {
    id: '234623',
    title: '🌿 Tomates',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
  {
    id: '63452',
    title: '🌿 Alimentos canábicos',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
  {
    id: '346237',
    title: '🍭 MDMA',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
  {
    id: '632425',
    title: '🌿 Tomates',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
  {
    id: '62345',
    title: '🌿 Alimentos canábicos',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
  {
    id: '5231',
    title: '🍭 MDMA',
    description: 'O mais top do mercado',
    items: [
      {
        id: '1_2',
        productId: 'sdjfaksdfj',
        description: '',
        measure: MeasureType.G,
        price: 400,
        title: 'Haka california',
      },
    ],
  },
]

export default function TableList({ ...props }) {
  const { currentTable, handleClick, onDeleteTables, onCheck } = props
  const [checked, setChecked] = React.useState<string[]>([])

  const handleToggle = (id: string) => () => {
    const currentIndex = checked.indexOf(id)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(id)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
    onCheck([...newChecked])
  }

  React.useEffect(() => {
    console.log(currentTable)
  }, [currentTable])

  function deleteSelectedTables([...checked]) {
    onDeleteTables([])
  }

  function getTables() {}

  return (
    <List className=" h-full">
      {tables.map((table, value) => {
        const labelId = `checkbox-list-label-${table.id}`

        return (
          <ListItem
            className="mb-3"
            key={table.id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                {currentTable == table.id ? (
                  <VisibilityOff />
                ) : (
                  <RemoveRedEye color="primary" />
                )}
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              onClick={() => handleClick(table.id)}
              className={`rounded-xl hover:bg-zinc-600 ${
                checked.indexOf(table.id) !== -1 && 'bg-zinc-900'
              }
              ${currentTable == table.id && 'bg-cyan-800'}
              `}
              role={undefined}
              dense
            >
              <ListItemIcon onClick={handleToggle(table.id)}>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(table.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': table.id }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${table.title}`} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}
