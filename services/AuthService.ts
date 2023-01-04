import axios from 'axios'
import jwtDecode, { JwtPayload } from 'jwt-decode'
import { getUserById } from './UserService'

const api = process.env.BACKEND_API
const secret = process.env.JWT_SECRET ?? 'thatsasecret'

type SignInRequestData = {
  nickname: string
  password: string
}

type DecodedInfo = {
  userId: string
  iss?: string
  sub?: string
  aud?: string[] | string
  exp?: number
  nbf?: number
  iat?: number
  jti?: string
}

export const isAuth = async (): Promise<boolean> => {
  const token = localStorage.getItem('token') ?? undefined
  if (!token) {
    return false
  } else {
    return true
  }
}

export async function signInRequest(data: SignInRequestData) {
  try {
    const res = await axios.post(api + '/auth', data)
    return res.data
  } catch (err: any) {
    throw err.response
  }
}

export async function recoverUserInformation(token: string) {
  try {
    const { userId } = jwtDecode<DecodedInfo>(token)
    if (userId) {
      const { nickname, email, createdAt } = await getUserById(userId)

      return { nickname, email, createdAt }
    } else {
      throw new Error('Erro ao decodificar token, retornou nulo')
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const refreshToken = async () => {}
