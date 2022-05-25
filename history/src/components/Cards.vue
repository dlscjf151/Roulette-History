<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-card width="70%" color="mb-4" v-for="(event,index) in value" v-bind:key="index"
              v-bind:class="event.returnValues.prize > 0 ? 'green lighten-1' : 'red lighten-2'">
        <v-card-title>
          {{ event.returnValues.prize > 0 ? "성공" : "실패" }}
        </v-card-title>
        <v-card-text class="font-weight-bold">
          <v-row>
            <v-col>
              <span>베팅 : {{ event.returnValues.betNumber }}</span>
            </v-col>
            <v-col>
              <span>결과 : {{ event.returnValues.randomNumber }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span>베팅 금액 : {{ toEther(event.returnValues.betAmount) }} ether</span>
            </v-col>
            <v-col>
              <span>상금 : {{ toEther(event.returnValues.prize) }} ether</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span>Block Number : {{ event.blockNumber }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span>Tx Hash : {{ event.transactionHash }}</span>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import web3Instance from "@/js/web3";

export default {
  name: "Cards",
  props: {
    value: Array
  },
  created() {
    console.log("xxx", this.value);
    web3Instance.init();
  },
  methods: {
    toEther: function (wei) {
      return web3Instance.toWei(wei);
    }
  }
}
</script>

<style scoped>

</style>