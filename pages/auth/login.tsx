import { Card, Button } from 'antd'
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
            <Card className="bg-slate-900 w-auto">
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
                    className="text-black appearance-none rounded-md relative block w-full px-3 py-2 border-2 border-amber-600"
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
                    className="text-black appearance-none rounded-md relative block w-full px-3 py-2 border-2 border-amber-600"
                    placeholder="Senha"
                  />
                   {error && <h1 className="text-amber-600 mt-3">{error}</h1>}
                </div>

                <div className="w-full grid justify-items-end pt-3">
                  <Button disabled={isLoading} htmlType="submit">
                    Submit
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
