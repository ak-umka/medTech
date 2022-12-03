import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registation, login } from 'store/actions/auth.action'

export const Auth = (props) => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    dispatch(props.register ? registation(data) : login(data))
  }

  return (
    <div className="auth">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="exampleInputFirstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFirstName"
            placeholder="First Name"
            {...register('firstname', { required: true })}
          />
          {errors.firstname && (
            <span className="text-danger">First name is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputLastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLastName"
            placeholder="Last Name"
            {...register('lastname', { required: true })}
          />
          {errors.lastname && (
            <span className="text-danger">Last name is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-danger">Email is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="text-danger">Password is required</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
