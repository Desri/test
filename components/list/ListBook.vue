<template>
  <div>
    <b-row>
      <b-col cols="6" sm="3" lg="3" class="pl-1 pr-1 mb-2" v-for="(data, index) in listBook" v-bind:key="data.id">
        <div class="boxBooks">
          <b-card
            no-body>
            <img src="https://placekitten.com/380/200" class="card-img-top">
            <div class="boxnumber">
              <div class="number">
                <p>#{{index+1}}</p>
              </div>
            </div>
            <b-card-body>
              <a href="javascript:void(0)" @click="onShowDetilModal(data.id, index+1)">
                <div class="boxTitle">
                  <div class="titleBook">
                    <h4 class="mb-0">{{data.name}}</h4>
                  </div>
                </div>
                <div class="descBook">
                  <div class="desc">
                    <p>{{data.description}}</p>
                  </div>
                </div>
                <div class="creadBy">
                  <div class="user">
                    <p><b-icon-person></b-icon-person> {{data.createdBy.fullname}}</p>
                    <p><b-icon-stopwatch></b-icon-stopwatch> {{formatDate(data.createdAt)}}</p>
                  </div>
                </div>
              </a>
            </b-card-body>
            <template #footer>
              <a href="javascript:void(0)" @click="onModalEdit(data.id, data.name, data.description)">Edit</a>
            </template>
          </b-card>
        </div>
      </b-col>
    </b-row>

    <b-modal ref="modal-edit" id="modalEdit" centered title="Edit" hide-footer>
      <div class="formEdit">
        <b-form-group label="Title:">
          <b-form-input
            placeholder="Title"
            v-model="name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Description:">
          <b-form-textarea
            placeholder="Enter something..."
            rows=4
            v-model="description"
            max-rows="8"
          ></b-form-textarea>
        </b-form-group>
        <div class="boxSubmit">
          <b-button type="submit" variant="primary" @click="onEdit">Submit</b-button>
          <div class="spiner" v-if="onShow">
            <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal ref="modal-detail" id="modalDetail" centered title="Detail" hide-footer>
      <detail :listBook="listBook"></detail>
    </b-modal>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import Detail from '~/components/detail';
  export default {
    props: [
      'listBook',
    ],
    data () {
      return {
        onShow: false,
        id: '',
        name: '',
        description: ''
      }
    },
    computed: {
      ...mapGetters({
        fetchBook: 'book/listBook'
      }),
    },
    async mounted() {
      
    },
    methods: {
      ...mapActions({
        pushDetailBook: 'book/fetchDetailBook',
        pushEditBook: 'book/fetchEditBook',
      }),
      async onShowDetilModal(id, no){
        let response = await this.pushDetailBook(id);
        this.$refs['modal-detail'].show()
      },
      async onModalEdit(id, name, description) {
        this.$refs['modal-edit'].show()
        this.id = id
        this.name = name
        this.description = description
      },
      async onEdit() {
        this.onShow = true
        var formData = new FormData()
        formData.append('id', this.id)
        formData.append('name', this.name)
        formData.append('description', this.description)
        let response = await this.pushEditBook(formData);
        await this.$store.dispatch('book/fetchListBook');
        this.$refs['modal-edit'].hide()
        this.onShow = false
      }
    }
  }
</script>