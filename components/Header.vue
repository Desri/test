<template>
  <div>
    <header>
      <b-navbar toggleable="lg">
        <b-container>
        <b-navbar-brand href="/">Logo</b-navbar-brand>
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!$auth.loggedIn" href="#" @click="modalLogin" class="login">LOGIN</b-nav-item>
            <b-nav-item-dropdown right class="boxUser" v-else>
              <template #button-content v-if="name.user">
                <span v-if="name.user.data">{{name.user.data.fullname}}</span>
              </template>
              <b-dropdown-item href="/profile">Profile</b-dropdown-item>
              <b-dropdown-item @click="onLogout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-container>
      </b-navbar>
    </header>
    <b-modal ref="modal-login" id="modal-login" centered title="Login" hide-footer no-close-on-backdrop>
      <modal-login></modal-login>
    </b-modal>
  </div>
</template>

<script>
  import ModalLogin from '~/components/modal/LoginForm';
  export default {
    components : {
      ModalLogin
    },
    data () {
      return {
        name: ''
      }
    },
    async mounted() {
      this.name = await this.$store.state.auth
      if (this.$store.state.auth.loggedIn == false) {
        this.modalLogin()
      }
    },
    methods: {
      modalLogin() {
        this.$refs['modal-login'].show()
      },
      async onLogout() {
        let token = localStorage.getItem("auth._token.local");
        const logout = await this.$axios.$get(`api/users/logout?token=${token}`)
        this.$auth.logout(logout)
        localStorage.clear()
        sessionStorage.clear();
        this.$cookies.removeAll()
        location.reload();
      }
    }
  }
</script>