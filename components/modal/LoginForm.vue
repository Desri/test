<template>
  <div>
    <b-form>
      <b-form-group>
        <b-form-input
          v-model="form.username"
          type="text"
          placeholder="Username"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="form.password"
          :type="passwordVisible ? 'text' : 'password'"
          placeholder="Password"
          required
        ></b-form-input>
        <div @click='togglePasswordVisibility' :arial-label='passwordVisible ? "Hide password" : "Show password"'>
          <span v-if="passwordVisible"><b-icon-eye></b-icon-eye></span>
          <span v-else><b-icon-eye-slash></b-icon-eye-slash></span>
        </div>
      </b-form-group>
      <b-button block variant="primary" @click="onSubmit">Submit</b-button>
    </b-form>
    <div class="forgot">
      <p>
        <NuxtLink to="/#">Forgot Password?</NuxtLink>
      </p>
    </div>
    <div class="login-sosmed">
      <div class="box-sosmed fb-login">
        <b-icon-facebook></b-icon-facebook> Facebook
      </div>
      <div class="box-sosmed google-login">
        <b-icon-google></b-icon-google> Google
      </div>
    </div>
    <div class="text-register">
      <p>
        Don't have an account? <NuxtLink to="/#">Register</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          username: 'icp',
          password: 'rahasia'
        },
        passwordVisible: false,
      }
    },
    computed: {
      
    },
    async mounted() {
      
    },
    methods: {
      togglePasswordVisibility () {
        this.passwordVisible = !this.passwordVisible
      },

      async onSubmit() {
        try {
          var formData = new FormData()
          formData.append('username', this.form.username)
          formData.append('password', this.form.password)
          let response = await this.$auth.loginWith('local', { data: formData })
          if (response.statusText == 'OK') {
            this.fetchUserInfo(response.data.data.token)
            location.reload();
          }
        } catch (err) {
          console.log(err)
        }
      },

      async fetchUserInfo(token) {
        const user = await this.$axios.$get(`api/users/me?token=${token}`)
        this.$auth.setUser(user)
      },
    }
  }
</script>