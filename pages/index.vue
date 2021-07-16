<template>
  <div class="container" v-if="$auth.loggedIn">
    <b-row>
      <b-col sm="12" lg="11" class="mb-3 py-4 mx-auto">
        <div class="boxAddBook">
          <div class="btnAdd">
            <button class="btn" @click="onModalAdd"><b-icon-plus></b-icon-plus> Add Book</button>
          </div>
        </div>
        <list-book :listBook="listBook"></list-book>
      </b-col>
    </b-row>
    <b-modal ref="modal-add" id="modalEdit" centered title="Add" hide-footer>
      <div class="formEdit">
        <b-form-group label="Judul Buku:">
          <b-form-input
            placeholder="Judul"
            v-model="name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Deskripsi Buku:">
          <b-form-textarea
            placeholder="Deskripsi..."
            rows="4"
            v-model="description"
            max-rows="8"
          ></b-form-textarea>
        </b-form-group>
        <div class="boxSubmit">
          <b-button type="submit" variant="primary" @click="onSubmit">Submit</b-button>
          <div class="spiner" v-if="onShow">
            <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import ListBook from '~/components/list/ListBook';
  export default {
    data () {
      return {
        onShow: false,
        name: '',
        description: ''
      }
    },
    computed: {
      ...mapGetters({
        listBook: 'book/listBook'
      }),
    },
    async mounted() {
      let checkToken = localStorage.getItem("auth._token.local")
      if ( checkToken ) {
        await this.$store.dispatch('book/fetchListBook');
      }
     
    },
    methods: {
      ...mapActions({
        pushAddBook: 'book/fetchAddBook',
      }),
      async onModalAdd() {
        this.$refs['modal-add'].show()
      },
      async onSubmit() {
        this.onShow = true
        var formData = new FormData()
        formData.append('name', this.name)
        formData.append('description', this.description)
        let response = await this.pushAddBook(formData);
        await this.$store.dispatch('book/fetchListBook');
        this.$refs['modal-add'].hide()
        this.name = ''
        this.description = ''
        this.onShow = false
      }
    }
  }
</script>