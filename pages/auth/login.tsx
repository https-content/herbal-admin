import { Card, Button } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useForm } from 'react-hook-form'

export default function Login() {
  const { signIn, isLoading, error } = useContext(AuthContext)
  const { register, handleSubmit } = useForm()

  async function handleSignIn(data) {
    await signIn(data)
  }

  return (
    <>
      <main className="bg-black h-screen w-screen grid justify-items-center">
        <div className="text-start container grid items-center justify-items-center text-white h-full w-full">
          <div id="login-div" className="w-96">
            <div className="mb-3 w-full flex justify-between">
              <div className="text-lg font-bold">Faça seu login</div>
            </div>
            <Card className="bg-black w-auto p-8 border-2 border-violet-800 rounded-lg">
              <form onSubmit={handleSubmit(handleSignIn)}>
                <div>
                  <label htmlFor="nickname">Usuário</label>
                </div>

                <div className="mb-3">
                  <input
                    {...register('nickname')}
                    disabled={isLoading}
                    type="text"
                    id="nickname-input"
                    name="nickname"
                    required
                    className="text-black appearance-none rounded-md relative block w-full px-3 py-2 border-2 border-violet-800"
                    placeholder="Usuário"
                  />
                </div>

                <div>
                  <label htmlFor="password">Senha</label>
                </div>

                <div className="mb-3">
                  <input
                    {...register('password')}
                    disabled={isLoading}
                    type="password"
                    id="password-input"
                    name="password"
                    required
                    className="text-black appearance-none rounded-md relative block w-full px-3 py-2 border-2 border-violet-800"
                    placeholder="Senha"
                  />
                  {error && <h1 className="text-amber-600 mt-3">{error}</h1>}
                </div>

                <div className="w-full grid justify-items-end pt-3">
                  <Button
                    variant="contained"
                    className="bg-violet-800 hover:bg-violet-500 font-bold"
                    disabled={isLoading}
                    type="submit"
                  >
                    Login
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
