<template>
  <div class="boo">
    <p>Name: {{ coin.name }}</p>
    <p>Symbol: {{ coin.symbol }}</p>
    <p>Price (USD): {{ coin.price_usd }}</p>
    <p>{{evenOrOdd}}</p>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
  
export default {
    name: 'Currency',
    data() {
      return {
        coin: {}
      }
    },
    created() {
      this.fetchData()
    },
    computed: mapGetters([
    'evenOrOdd'
    ]),
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/'+this.$route.params.id+'/')
        .then((resp) => {
          this.coin = resp.data[0]
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
