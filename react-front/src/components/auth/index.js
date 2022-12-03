import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registation, login } from 'store/actions/auth.action'
import { useEffect, useState } from 'react'

export const Auth = (props) => {
  const [role, setRole] = useState('')
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    dispatch(props.reg ? registation(data) : login(data))
  }

  useEffect(() => {
    console.log(role)
  }, [])

  return (
    <section className="sign-up">
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              {props.reg ? (
                <h1 className="my-5 display-3 fw-bold ls-tight text-primary">
                  Регистрация
                </h1>
              ) : (
                <h1 className="my-5 display-3 fw-bold ls-tight text-primary">
                  Вход
                </h1>
              )}
              <h5 className="text-secondary">Ваше здоровье самое важное</h5>
            </div>

            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Firstname */}
                    <div className="form-outline mb-4">
                      <label className="form-label">First name</label>
                      <input
                        type="text"
                        id="first-name"
                        className="form-control"
                        {...register('firstname', {
                          required: true,
                        })}
                      />
                      {errors.firstname && (
                        <span className="text-danger">
                          First name is required
                        </span>
                      )}
                    </div>
                    {/* Lastname */}
                    <div className="form-outline mb-4">
                      <label className="form-label">Last name</label>
                      <input
                        type="text"
                        id="last-name"
                        className="form-control"
                        {...register('lastname', {
                          required: true,
                          pattern: {
                            message: 'Invalid last name',
                          },
                        })}
                      />
                      {errors.firstname && (
                        <span className="text-danger">
                          Last name is required
                        </span>
                      )}
                    </div>
                    {/* Email */}
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        {...register('email', {
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                      />
                      {errors.email && (
                        <span className="text-danger">Email is required</span>
                      )}
                    </div>

                    {/* Password */}
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        {...register('password', {
                          required: true,
                          pattern: {
                            message: 'Invalid password',
                          },
                        })}
                      />
                      {errors.password && (
                        <span className="text-danger">
                          Password is required
                        </span>
                      )}
                    </div>

                    {props.reg ? (
                      <div className="form-outline mb-4">
                        <select
                          class="form-select "
                          aria-label="Default select example"
                        >
                          <option selected>Patient</option>
                          <option value="1">Doctor</option>
                        </select>
                      </div>
                    ) : (
                      <></>
                    )}
                    {/* Submit  */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
