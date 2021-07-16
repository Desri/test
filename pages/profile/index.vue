<template>
  <div class="container">
    <b-row>
      <b-col sm="12" lg="11" class="mb-3 py-5 mx-auto">
        <div class="boxProfile">
          <div class="profile">
            <b-card>
              <div class="avatarUser">
                <div class="avatarImg" v-if="name.user">
                  <img src="@/assets/img/avatar.png"/>
                  <h2 v-if="name.user.data">{{name.user.data.fullname}}</h2>
                </div>
              </div>
              <div class="descProfile" v-if="dataUser.user">
                <p v-if="dataUser.user.data"><span>Id</span> : {{dataUser.user.data.id}}</p>
                <p v-if="dataUser.user.data"><span>Username</span> : {{dataUser.user.data.username}}</p>
                <p v-if="dataUser.user.data"><span>Aktif</span> : {{dataUser.user.data.active}}</p>
              </div>
            </b-card>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        name: '',
        dataUser: {}
      }
    },
    computed: {
      ...mapGetters({
        
      }),
    },
    async mounted() {
      this.name = await this.$store.state.auth
      this.dataUser = await this.$store.state.auth
    },
    methods: {
      ...mapActions({
        
      }),
    }
  }
</script>