import Vue from 'vue'

Vue.mixin({

  data () {
    return {
      
    }
  },
  async mounted() {
    
  },

  computed: {
    
  },

  methods: {
    formatDate(date) {
      let arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
      let arrhari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
      let dates = new Date(date);
      let hari = dates.getDay();
      let tanggal = dates.getDate();
      let bulan = dates.getMonth();
      let tahun = dates.getFullYear();
      let datetimes = arrhari[hari]+", "+tanggal+" "+arrbulan[bulan]+" "+tahun;
      return datetimes;
    },
  }
})
