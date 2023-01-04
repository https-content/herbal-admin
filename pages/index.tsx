import Head from 'next/head'
import Image from 'next/image'
import { Card, Menu } from 'antd'
import { Inter } from '@next/font/google'
import SideMenu from '../components/SideMenu'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { api } from '../services/api'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { getAPIClient } from '../services/axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <main className="h-screen w-screen flex">
        <SideMenu />
        <div className="bg-black w-10/12 p-10">
          <div className="flex justify-start items-baseline gap-2">
            <h1 className="font-thin text-3xl">Bem-vindo <strong>{user?.nickname}</strong></h1>
          </div>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'auth.token': token } = parseCookies(ctx)

  console.log({ token })

  if (!token) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
