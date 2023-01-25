import { Badge, Grid } from '@mui/material'
import * as React from 'react'
import { CardActionArea } from '@mui/material'
import { blue, green, orange, pink, yellow } from '@mui/material/colors'
import { Panel } from './Panel'

type PanelConfig = {
  bgColor: string
  title: string
  qtd: number
  new: number
  route: string
}

const panelConfig: PanelConfig[] = [
  {
    bgColor: green[500],
    title: 'Pedidos',
    qtd: 76,
    new: 15,
    route: '/order',
  },
  {
    bgColor: orange[500],
    title: 'Estoque',
    qtd: 76,
    new: 15,
    route: '/product',
  },
  {
    bgColor: yellow[500],
    title: 'Categorias',
    qtd: 76,
    new: 15,
    route: '/category',
  },
  {
    bgColor: pink[500],
    title: 'Tabelas',
    qtd: 76,
    new: 15,
    route: '/table',
  },
  {
    bgColor: green[500],
    title: 'Entregadores',
    qtd: 76,
    new: 15,
    route: '/deliveryman',
  },
  {
    bgColor: blue[500],
    title: 'Usuários',
    qtd: 2000,
    new: 3,
    route: '/contact',
  },
]

export default function Panels({ ...props }) {
  const { goTo } = props

  return (
    <Grid className="w-full" container columns={12}>
      <Grid
        xs={12}
        item
        container
        spacing={2.5}
        justifyContent="flex-start"
        className="w-full pt-5"
      >
        {panelConfig.map((panel) => (
          <Grid key={panel.title} item>
            <Badge color="warning" badgeContent={panel?.new}>
              <Panel
                route={panel.route}
                goTo={goTo}
                qtd={panel.qtd}
                title={panel.title}
                color={panel.bgColor}
              />
            </Badge>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
