<template>
  <div>
    <section class="vh-100" style="background-color: #eee">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div
                        class="d-flex justify-content-between mx-4 mb-3 mb-lg-4"
                      >
                        <b-button
                          class="btn-md"
                          variant="outline-primary"
                          :class="{'btn-active': form.role === 'doctor'}"
                          @click="form.role = 'doctor'"
                        >
                          Doctor
                        </b-button>
                        <b-button
                          variant="outline-primary"
                          class="btn-md"
                          :class="{'btn-active': form.role === 'patient'}"
                          @click="form.role = 'patient'"
                        >
                          Patient
                        </b-button>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            v-model="firstname"
                            type="text"
                            class="form-control"
                          />
                          <label class="form-label">Firstname</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            v-model="lastname"
                            type="text"
                            class="form-control"
                          />
                          <label class="form-label">Lastname</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            v-model="email"
                            type="email"
                            class="form-control"
                          />
                          <label class="form-label">Email</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            v-model="password"
                            type="password"
                            class="form-control"
                          />
                          <label class="form-label">Password</label>
                        </div>
                      </div>

                      <div class="d-flex mx-4 mb-3 mb-lg-4">
                        <button type="button" class="btn btn-primary btn-md">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: '',
      },
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>
.btn-active {
  background-color: #3f51b5;
  color: #fff;
}
</style>
