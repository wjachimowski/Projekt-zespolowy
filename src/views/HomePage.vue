<template>
  <div>
      <button class="allOffers" @click="this.if_all_offer = false">
      All offers
      </button>
      <button class="myOffers" @click="this.if_all_offer = true">
      My offers
      </button>    
  <div v-if="!if_all_offer">
      <button class="details" v-if="!if_detailed" @click="this.if_detailed = true">
      Details of adding offer
      </button>
      <button class="hideDetails" v-if="if_detailed" @click="this.if_detailed = false">
      Hide details of adding offer
      </button>
      <AddOffer v-if="if_detailed" v-on:addOffer="addOffer"/>
      <Offers :offers = "offers" :if_my_offers="false" v-on:deleteOffer="deleteOffer"/>
  </div>
  <div v-else>
      <button class="details" v-if="!if_detailed" @click="this.if_detailed = true">
      Details of adding offer
      </button>
      <button class="hideDetails" v-if="if_detailed" @click="this.if_detailed = false">
      Hide details of adding offer
      </button>
      <AddOffer v-if="if_detailed" v-on:addOffer="addOffer"/>
      <Offers :offers = "offers" :if_my_offers="true" v-on:deleteOffer="deleteOffer"/>
  </div>
  </div>
</template>

<script>
import Offers from '../components/Offers.vue';
import AddOffer from '../components/AddOffer.vue'
export default {
  components: { Offers, AddOffer },
name: "Home Page",
  data() {
    return {
      offers : [],
      if_all_offer: false,
      if_detailed: false
    };
  },
  methods : {
      addOffer(offer){
          console.log(offer)
          this.offers.push(offer)
      },
      deleteOffer(offer_id){
          const id = offer_id.offer_id;
          console.log(id)
          this.offers = this.offers.filter(x => x.offer_id !== id)
      }
  },
  created(){
      this.offers = [{
          offer_id : 1,
          offer_name : "Krzeslo",
          offer_description : "Piekne i wygonde krzeslo, Serdecznie polecam Piekne i wygonde krzeslo, Serdecznie polecam",
          position: {
                lat: 51.093048, lng: 6.842120,
        }
          
      },
      {
          offer_id : 2,
          offer_name : "Zabawka",
          offer_description : "Piekna zabawka", 
          position: {
                lat: 51.093048, lng: 6.842120,
        }
      }]
  }
}
</script>

<style>

</style>