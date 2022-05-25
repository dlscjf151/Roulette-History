<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="0" md="0">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             x="0px" y="0px" width="37px" height="37px" viewBox="0 0 32 32" enable-background="new 0 0 32 32"
             xml:space="preserve">  <image id="image0" width="32" height="32" x="0" y="0"
                                           href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
cwAAALgAAAC4ATDgowwAAAAHdElNRQfmBRkRKQS391fvAAAD6ElEQVRIx4XVa4hWVRQG4OfMjFPO
NFKRpuM1R03NUbspal6oKLAgzbAfKVRYKgYaUllkmTr+sFJD8E5FxmQXtdSprKhEC01Ks6A0tdHK
L8dRvDV5KVc/vuPHjA509o+z9matd6+9eNe7knDxl1ziLt110VkXhQ7I2GGtDXGmEd8LAZJiY012
WJXNDsiglVL93a2N5WbEwQsCot7SxLP+tEzHcPHSxRuOm66w/mm9DJJiKyUmxG5IrnCr9loho9rn
cRSScgsxPA5dlIGrbDFbXggG+MJZ+1X6xkfesc9Zn+mTZrlYta65uPTX1s8eCcElZjtonLYhWGRS
CFoaI6Mim74n7NKsIcB6L4XgRj9601U5/BQgzXG57XqFYIlV9QCM8Kn84AZnPFOvbPkqvZB9Vnoy
xynlQaGvPZkCKLJHl6DQDnPV6puCrnPMUUcds97IEAx3xHTbNAl6O6VlFqDCksj+K4P71BrmAzuN
0lki0dkou1R51GG3BO+aHoJKU7MAGR2Cm9VoEYLHnDNX0wYcKDJfuD8ErRxyU9Dd7wro6vsQfGxC
6vyheY0SaYGq1JrooxDsci/jzQoud0b7EAzzi6Jc0GiDc3ax3UaEoJPTSoK55uQZYgtudyT2gYfN
irocz4bol6PcXyo8CLHbMYOxWVmePmrQzpbUr5+tOXK/aJjJyYwc3NYc3GYdcUBZgX8cRKlmyRSU
KPITJLcZaIxrsDf514b4Aj9pmlQ4gRJtkNGxwEn5OKdYSxTLk4ArNVegh18kmrsim5I8LRSj2Dlw
jo0GBY9nqSlRmyVrCKY54ZjncvteaiUhWO2xYKAdeU4qRbX+EGGjvrmyTbNCRUzP1aCvTZHt/wH2
oNReZpsfNHNaWQjusk9J7s6R+uXsZva7J5WWvxUFr3iZXvaGoMrE1HGlBY0SaZnVqTXJuhDsMUzw
g57B9Q5pFYKxwkKXNQgusVSk95eq0Tso97t8wRTvpSV7LxjusOHettcY5fLlKzfGr1Yal+1Uq00N
wQrPZ5upteP6BE1sM8+h7KvdaYWMOnX+sMrQkHbqTFsVBD2d0fq8oIz2naZBT6fMbJD6a55usF+k
TregiU1m1Je0170Vgh6+tVppo5LWzlpbsnJqsU9TAc512s/ZuxWYqsYkXSXnASS6eUqtKfJTUf1N
8waiGlxrpxXZRtbL++octs52X/rEUXVWuS4EhZbYr3djg6XEqzqbEF9BUmSIDrnB8mW2xZPeFjjh
gahtdLQFE9VZ4+ZGidRdpdMNVToaGa5Xesh4l6rytQMyQgtX62eoppZYGpn/mc6QJO4wSCdlyoRq
v6r2lTXxz8W+/wHjXVktRIEX4gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wNS0yNVQxNzo0MTow
NCswMDowMPkLtJgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDUtMjVUMTc6NDE6MDQrMDA6MDCI
VgwkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="/>
</svg>
      </v-col>
      <v-col cols="13" sm="10" md="5">
        <v-text-field
            label="Address"
            solo
            dense
            class="pt-3"
            v-model="address"
            v-on:keyup.enter="search"
        ></v-text-field>
      </v-col>
    </v-row>
    <Cards v-model="events"/>
  </v-container>
</template>

<script>
import Cards from '@/components/Cards'
import web3Instance from '@/js/web3'

export default {
  name: "Home",
  components: {Cards},
  data() {
    return {
      address: "",
      events: []
    }
  },
  created: function () {
    web3Instance.init();
  },
  methods: {
    search: function () {
      web3Instance.search(this.address).then(events =>
          this.events = events.reverse()
      )
    }
  }
}
</script>

<style scoped>

</style>