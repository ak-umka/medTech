import { Auth } from 'components/auth'
function RegisterPage() {
  return (
    <>
      <div>
        <Auth register={true} />
      </div>
    </>
  )
}

export default RegisterPage
