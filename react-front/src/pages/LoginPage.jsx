import { Auth } from 'components/auth'

function LoginPage() {
  return (
    <>
      <div>
        <Auth register={false} />
      </div>
    </>
  )
}

export default LoginPage
