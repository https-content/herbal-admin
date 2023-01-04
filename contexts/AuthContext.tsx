import { createContext, useEffect, useState } from 'react'
import { recoverUserInformation, signInRequest } from '../services/AuthService'
import { parseCookies } from 'nookies'
import Cookie from 'js-cookie'
import Router from 'next/router'
import { api } from '../services/api'

type SignInData = {
  nickname: string
  password: string
}

type User = {
  email: string
  nickname: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user?: User
  signIn: (data: SignInData) => Promise<void>
  isLoading: boolean
  error?: string  
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | undefined>(undefined)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'auth.token': token } = parseCookies()

    if (token) {
      getUserByToken(token)
    }
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])

  async function signIn({ nickname, password }: SignInData): Promise<void> {
    try {
      setError(undefined)
      setLoading(true)
      const { token, user } = await signInRequest({
        nickname,
        password,
      })
      var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000)

      Cookie.set('auth.token', token, {
        expires: inFifteenMinutes,
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      setUser(user)
      Router.push('/')
      setLoading(false)
    } catch (err: any) {
      if (err?.data) {
        const { message } = err.data
        setError(message)
        setLoading(false)
      } else {
        const message = 'Não foi possível estabelecer conexão'
        setLoading(false)
        setError(message)
      }
    }
  }

  function getUserByToken(token: string) {
    recoverUserInformation(token).then((user: User) => setUser(user)).catch((err) => console.log(err))
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, isLoading, error }}
    >
      {children}
    </AuthContext.Provider>
  )
}
