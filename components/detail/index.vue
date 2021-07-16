<template>
  <div>
    <div class="detail">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body v-if="detailBook">
              <div class="headingDetail">
                <div class="userDetail">
                  <div class="avatar">
                    <img src="https://placekitten.com/300/300">
                  </div>
                  <div class="named">
                    <h3>{{detailBook.createdBy.fullname}}</h3>
                    <div class="date">
                      <p><b-icon-stopwatch></b-icon-stopwatch> {{formatDate(detailBook.createdAt)}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="detailTitle">
                <div class="title">
                  <h2>{{detailBook.name}}</h2>
                </div>
              </div>
              <div class="descDetail">
                <p>{{detailBook.description}}</p>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        detailBook: ''
      }
    },
    computed: {
      
    },
    async mounted() {
      this.detailBook = this.$store.state.book.detailBook
    },
    methods: {

    }
  }
</script>