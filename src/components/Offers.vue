<template>
<div>
    <li v-for="offer in this.offers" :key="offer.id">
          <Offer :content="offer" :if_my_offers="this.if_my_offers" v-on:deleteOffer="deleteOffer"/>
    </li>
</div>
</template>

<script>
import Offer from "./Offer.vue";
export default {
    name: "Offers",
    props:["offers","if_my_offers"],
    components: { Offer },
    data(){
        return{

        }
    },
    methods:{
        deleteOffer(offer_id){
            this.$emit('deleteOffer', offer_id);
        }
    }
}
</script>

<style>

</style>