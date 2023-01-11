import React, { ReactElement, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { ListItem, SvgIconTypeMap, Switch } from '@mui/material'
import { WhatsApp } from '@mui/icons-material'
import { useRouter } from 'next/router'
import StorageIcon from '@mui/icons-material/Storage'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export default function MainMenu() {
  const lastKey = localStorage.getItem('lastSelectedMenuOption')
  const [selectedOption, setSelectedIndex] = useState<string | null>(null)
  const [isOpen, setOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (lastKey !== null) setSelectedIndex(lastKey)
  }, [lastKey])

  const navigate = (route: string) => {
    router.push(route)
  }

  type MenuItem = {
    key: string
    title: string
    icon: ReactElement
    hasSwitcher: boolean
  }

  const menuOptions: MenuItem[] = [
    {
      key: 'bot',
      title: 'Bot',
      icon: <WhatsApp />,
      hasSwitcher: true,
    },
    {
      key: 'tables',
      title: 'Tabelas',
      icon: <StorageIcon />,
      hasSwitcher: false,
    },
  ]

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    key: string
  ) => {
    setSelectedIndex(key)
  }

  return (
    <Box className="bg-violet-500">
      <List component="nav" aria-label="main mailbox folders">
        {menuOptions.map((option) => (
          <ListItem key={option.key}>
            {!option.hasSwitcher ? (
              <ListItemButton className={'hover:bg-black'}>
                {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
                <ListItemText primary={option.title} />
              </ListItemButton>
            ) : (
              <>
                {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
                <ListItemText primary={option.title} />
                <Switch edge="end" color="secondary" />
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
