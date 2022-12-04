<template>
  <div class="header">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="/">Medical Center</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/services">Services</b-nav-item>
          <b-nav-item href="/about-us">About Us</b-nav-item>
          <b-nav-item href="/contacts">Contacts</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button
              size="sm"
              variant="primary"
              class="my-2 btn-sm mr-2"
              @click="goToSignup"
            >
              Sign Up
            </b-button>
            <b-button
              size="sm"
              variant="primary"
              class="my-2 ml-sm-0 btn-sm"
              @click="goToSignin"
            >
              Sign in
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      email: '',
    }
  },
  methods: {
    goToSignup() {
      
      this.$router.push('/signup')

    },
    goToSignin() {
      this.$router.push('/signin')
    },
    // logout() {
    //   this.$store.dispatch('auth/logout')
    //   this.$router.push('/')
    // },
  },
}
</script>
