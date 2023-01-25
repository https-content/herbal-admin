import { Button, Divider, Grid, IconButton, Typography } from '@mui/material'
import MainLayout from '../../components/MainLayout'
import { Box } from '@mui/system'
import { Table } from './components/TableList'
import Paginator from '../../components/Paginator'
import TableList, { tables } from './components/TableList'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Add, Delete } from '@mui/icons-material'

export default function TablePage() {
  const [currentTable, setCurrentTable] = useState<string | null>(null)
  const [tablesArr, setTables] = useState<Table[] | null>(null)
  const [isLoading, setLoading] = useState(false)
  const [checked, setChecked] = useState<string[] | null>(null)
  const [newTable, setNewTable] = useState(true)

  useEffect(() => {
    console.log({ currentTable })
  }, [currentTable])

  useEffect(() => {
    if (!tablesArr) return
    setLoading(false)
  }, [tablesArr])

  function loadTables() {
    setLoading(true)
    setTables(tables)
  }

  function handleClick(key: string) {
    if (key == currentTable) setCurrentTable(null)
    setCurrentTable(key)
  }

  function onCheck([...checked]) {
    setChecked(checked)
  }

  return (
    <MainLayout>
      <Grid
        container
        spacing={2.5}
        columns={12}
        className="h-full"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} className="h-5/6">
          <Box className="w-full h-full overflow-y-auto bg-zinc-700 p-5 rounded-xl">
            <Grid
              position="fixed"
              container
              item
              spacing={2.5}
              sx={{ pb: 2 }}
              alignItems="center"
              className="bg-red-900 z-50 rounded-t-xl w-1/2"
              justifyContent="start"
              boxShadow={'0px 10px 0px rgba(0,0,0,0.12)'}
              xs={12}
            >
              <Grid item>
                <Typography>Lista de tabelas</Typography>
              </Grid>
              <Grid item>
                {checked && checked.length > 0 ? (
                  <IconButton>
                    <Delete />
                  </IconButton>
                ) : (
                  <IconButton>
                    <Add />
                  </IconButton>
                )}
              </Grid>
            </Grid>

            <Grid container item xs={12}>
              <Grid item xs={12} className="overflow-auto h-5/6 pt-20">
                <TableList
                  onCheck={onCheck}
                  handleClick={handleClick}
                  currentTable={currentTable}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {currentTable ? (
          <Grid item xs={4} className="h-5/6">
            <motion.div className="h-full bg-zinc-700 p-6 w-full rounded-xl ">
              <Typography>Visualização de tabela</Typography>
            </motion.div>
          </Grid>
        ) : (
          <Grid item xs={4} className="h-5/6">
            <motion.div className="h-full bg-zinc-700 p-6 w-full rounded-xl ">
              <Grid container item>
                <Grid container item>
                  <Typography>Nova tabela</Typography>
                </Grid>
                <Grid container item alignItems="end" className="h-full">
                  <Button className="bg-purple-500 rounded-lg text-white p-2">
                    Adicionar
                  </Button>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        )}
      </Grid>
    </MainLayout>
  )
}
