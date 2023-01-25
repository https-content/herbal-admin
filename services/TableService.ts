import { Table } from '@mui/material'
import { api } from './api'

type RowData = {
  description: string
  productId: string
}

type TableData = {
  title: string
  active: boolean
  description: string
  rows: RowData[]
}

export async function create(data: TableData) {
  const { active, description, rows, title } = data
  try {
    const res = await api.post(`/table/`, { ...data })
    return res.data
  } catch (err) {
    return err
  }
}

export async function list(limit: number, offset: number) {
  console.log(limit, offset)
  try {
    const res = await api.get(`/table/`)
    return res.data
  } catch (err) {
    return err
  }
}

export async function get(id: string) {
  try {
    const res = await api.get(`/table/${id}`)
    return res.data
  } catch (err) {
    return err
  }
}

export async function update(id: string, data: TableData) {
  const { active, description, rows, title } = data
  try {
    const res = await api.put(`/table/${id}`, { ...data })
    return res.data
  } catch (err) {
    return err
  }
}

export async function remove(id: string) {
  try {
    const res = await api.delete(`/table/${id}`)
    return res.data
  } catch (err) {
    return err
  }
}
